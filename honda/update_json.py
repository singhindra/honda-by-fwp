import json, requests, re
from bs4 import BeautifulSoup as bs


url1 = "https://www.honda2wheelersindia.com/"

web_html = requests.get(url1).text
soup = bs(web_html,'html.parser')


def get_features(model):
    f_name = "static\\images\\"
    if(model['type'] != 'Super Bikes'):
        print(model['name'])

        soup = bs(requests.get(model['link']).text, 'html.parser')
        f_url = list(filter(lambda value: value.text == 'Features',soup.find('div',attrs={'id':'accordion-1'}).find_all('li')))[0].a['href']
        c_url = list(filter(lambda value: value.text == 'Colors',soup.find('div',attrs={'id':'accordion-1'}).find_all('li')))[0].a['href']

        brochure =  'https://' + model['link'].split('/')[2] + [value['href'] for value in soup.find('div',attrs={'id':'accordion-2'}).find_all('a') if value.span.text == 'E-Brochure'][0]
        f_soup = bs(requests.get(url1 + f_url).text, 'html.parser')
        f_lst = list(map(lambda value: value.text, f_soup.find_all('h2')))
        c_soup = bs(requests.get(url1 + c_url).text,'html.parser')

        print(c_url)
        for each in tuple(zip(list(map(lambda value: 'https://' + url1.split('/')[2] + c_soup.find('div',attrs={'id':value}).img['src'], list(map(lambda value:value['data-target'][1:],c_soup.find('ul',attrs={'id':'myTab'}).find_all('a'))))),list(map(lambda value: value.span.text.replace(' ','_'), c_soup.find('ul',attrs={'id':'myTab'}).find_all('a'))))):
            with open((f_name + model['name'] + '_' + each[1]).replace('\\\\','\\') + '.jpg','wb') as f:
                print(each[0])
                f.write(requests.get(each[0]).content)

        c_lst= tuple(zip(list(map(lambda value: value.span.text, c_soup.find('ul',attrs={'id':'myTab'}).find_all('a'))),list(map(lambda value:url1 + value.img['src'],c_soup.find('ul',attrs={'id':'myTab'}).find_all('a'))),list(map(lambda value: f_name.replace('\\\\','\\') + model['name'] + '_' + value + '.jpg',list(map(lambda value: value.span.text.replace(' ','_'), c_soup.find('ul',attrs={'id':'myTab'}).find_all('a')))))))

    else:
        print(model['name'])
        link = model['link'].split('/')[2]
        soup = bs(requests.get(model['link']).text,'html.parser')
        brochure = model['link']
        f_lst = list(map(lambda value: value.text.strip(),soup.find('section',attrs={'id':'featureSection'}).find_all('p',attrs={'class':'text-special'})))
        for each in list(map(lambda value: 'https://' + link + value['src'],soup.find_all('img',attrs={'alt':'color'}))):
            with open(f_name + model['name'].replace(' ','_') + '_' + each.split('/')[-1].replace('-','_') + '.png','wb') as f:
                print(each)
                f.write(requests.get(each).content)

        c_lst = tuple(zip(list(map(lambda value: value.text,soup.find('section',attrs={'id':'colorSection'}).find_all('p'))),list(map(lambda value: link + value['src'],soup.find('section',attrs={'id':'colorSection'}).find_all('img'))),list(map(lambda value: f_name.replace('\\\\','\\') + model['name'].replace(' ','_') + '_' + value['src'].split('/')[-1],soup.find_all('img',attrs={'alt':'color'})))))


    return(f_lst,c_lst,brochure)

def get_models_lst(category):
    models = []

    if(category != "Super Bikes"):

        cat = "menu_"+category
        mod = soup.find('div',attrs={'class':'graybar','id':cat})
        lst = [value.a for value in mod.find_all('div',attrs={'class':'item'})]
        for each in lst:
            item = {}
            item['type'] = category
            item['name'] = each['href'][1:-1]
            item['link'] = url1 + each['href'][1:]
            item['image'] = url1 + each.img['src'][1:]
            models.append(item)
    else:
        #print('------------------------------')
        cat = "menu_superBikes"
        mod = soup.find('div',attrs={'class':'graybar','id':cat})
        lst = [value.a for value in mod.find_all('div',attrs={'class':'item'})]
        for each in lst:
            item = {}
            item['type'] = category
            item['name'] = re.split("/", each['href'])[-1]
            item['link'] = each['href']
            item['image'] = url1 + each.img['src'][1:]
            f = open(item['name'],'wb')
            f.write(requests.get(item['image']).content)
            f.close()

            models.append(item)
    return models

def modify_models_chat(model,av_colors):
    chat = []
    chat.append('_' + av_colors[0][2])
    chat.append("Don't believe us then have a look at its features")
    chat.append("#" +model['name'])
    chat.append("you can check out the video below")

    return chat
#########################################################################33
f = open("chat.json").read()
data = json.loads(f)

category_list = ['Motorcycle','Scooter','Super Bikes']
data['Sales']['options'] = category_list


#print(category_list)

for each in category_list:
    # if(data[each]['options'] != get_models_lst(each)):
    #print(each)
    options = get_models_lst(each)
    #print(options)
    chat = ["Great choice","Now let me show you the models that we have...","Select your choice and give us chance to dive dipper with you to know the models a bit better :)"]
    data[each] = {'chat':chat,'options':options}

    for model in options:

        image = model['image']
        options = data['Model select']['options']
        features,av_colors,brochure = get_features(model)
        chat = modify_models_chat(model,av_colors)
        data[model['name']]={'brochure':brochure,'features' : features, 'colors' : av_colors, 'chat':chat, 'options':options}

with open("chat.json", 'w') as json_file:
    json.dump(data, json_file)
