# Django-Vue-Postgresql-Docker template

&nbsp;

> Django Rest Framework+Vue CLI is just too boring <br/>
> -Shakespeare

&nbsp;

This is a dockerized vanilla Django + Vue.js CDN SPA template. Meant to mimic DRF+Vue CLI as much as possible without needing separate hosting for the two. 

Features include:
- Axios for handling requests
- Vuex for state management
- Vue router for managing SPA behaviour
- Postgresql as database
- User authentication
- Simple blog app

## Running in developement

Prerequisites:
- Docker

```
$ git clone https://github.com/karlru/django-vue-template
$ cd django-vue-template
```

Environment variables must be declared by creating following folder/file structure:

<pre>
django-vue-template
├── .envs
│   ├── .local
│   │   ├── .django
│   │   └── .postgres
│   └── .production
│       ├── .django
│       └── .postgres
</pre>

A .django file must specify a SECRET_KEY variable, .postgres file POSTGRES_DB, POSTGRES_USER and POSTGRES_PASSWORD variables.

Alternatively you could specify those in core/settings.py and local.yml files.

```
$ docker-compose -f local.yml up
```


## Vue setup

Vue, Vuex, Vue router and Axios are all included in the base.html template via CDN so that there is no need to import them anywhere else. 

Vue side of app consists of mainly two parts: components and store modules, which work hand in hand. A new set of these files with predefined templates can be created using `$ python utils/create_component.py *NAME_OF_COMPONENT*`.
Necessary changes in Vuex store and router must be done by hand.
