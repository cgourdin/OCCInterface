### Post on blog schema

* Here is a simple POST which should create a blog entry, a blog entry and a user (you can test on malmo.lizenn) %{
  "text": "post",
  "post":
  [
    {
        "adress": "/categories/blog",
        "datas": {
          "kind":"example.org/occi/test#blog",
          "id": "6df690d2-3158-40c4-88fb-d1c41584d6e5"
        }     
    },
    {
        "adress": "/categories/user",
        "datas": {
          "attributes": {
            "blog.user.email": "romain@gmail.com",
            "blog.user.name": "Romain"
          },
          "id": "6df690d2-3158-40c4-88fb-d1c41584d6"
        }
    },
    {
        "adress": "/categories/entry",
        "datas": {
          "attributes":{
            "blog.entry.title": "Develop React Application",
            "blog.entry.content": "First, you need to read the doc. Then you have to experiment by yourself"
          },
          "id": "6df690d2-3158-40c4-88fb-d1c41584d7"
        }
    }
  ]
}%

* Now let's create a link between entry and user : it is a qualified association, named %{
    "text": "author",
    "post": {
      "adress": "/categories/author",
      "datas": {
        "target": {
          "location": "6df690d2-3158-40c4-88fb-d1c41584d7"
        },
        "source": {
          "location": "6df690d2-3158-40c4-88fb-d1c41584d6"
        },
        "id": "6df690d2-3158-40c4-88fb-d1c41584d8"
      }
    }
  }%

* You can get the entry you posted before (for instance) by clicking [here](/6df690d2-3158-40c4-88fb-d1c41584d7)

* Finally, you can delete what you posted by clicking %{
  "text": "here",
  "del": [
    "/6df690d2-3158-40c4-88fb-d1c41584d7",
    "/6df690d2-3158-40c4-88fb-d1c41584d6",
    "/6df690d2-3158-40c4-88fb-d1c41584d8",
    "/6df690d2-3158-40c4-88fb-d1c41584d6e5"
  ]
}%
