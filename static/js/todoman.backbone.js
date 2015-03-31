// TODO: put in app.js
var App = window.App = {};

_.templateSettings = {interpolate: /\{\{(.+?)\}\}/g};

// classes
// TODO: put in app/*.js

App.Todo = Backbone.Model.extend({
    defaults: function () {
        return {
            date: new Date(),
            title: 'noname',
            done: false,
            tags: [],
            created_date: new Date()
        };
    },
    initialize: function () {
        //App.model.on('change:words', this.refreshCount, this);
        //this.refreshCount();
    },
    //refreshCount: function () {
    //    var keyword = this.get('keyword');
    //    this.set({count: App.model.getCount(keyword)});
    //},
    clear: function () {
        this.destroy();
    }
});

App.OneLineView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#oneline-template').html()),
    events: {
        //'dblclick .view': 'edit',
        //'click a.destroy': 'clear',
        //'keypress .edit': 'updateOnEnter',
        //'blur .edit': 'close'
    },
    initialize: function () {
        this.model.bind('change', this.render, this);
        this.model.bind('destroy', this.remove, this);
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        //this.input = this.$('.edit');
        return this;
    },
    edit: function () {
        //this.$el.addClass('editing');
        //this.input.focus();
    },
    close: function () {
        //var value = this.input.val();
        //if (!value) {
        //    this.clear();
        //}
        //this.model.set({keyword: value});
        //this.$el.removeClass('editing');
    },
    updateOnEnter: function (e) {
        //if (e.keyCode == 13) {
        //    this.close();
        //}
    },
    clear: function () {
        this.model.clear();
    }
});

App.TodoList = Backbone.Collection.extend({
    model: App.Todo,
    localStorage: new Store('todoman-backbone'),
    initialize: function () {
        this.on('add', this.onChange, this);
        this.on('remove', this.onChange, this);
        this.on('reset', this.onChange, this);
    },
    onChange: function () {
        //var keywords = this.pluck('keyword');
        //App.model.set({keywords: keywords});
        //App.highlightedTab.activate();
    }
});

App.TodoListView = Backbone.View.extend({
    el: '#todolist',
    events: {
        //'keypress .keyword': 'createOnEnter',
        'click th a.destroy': 'clear'
    },
    initialize: function (options) {
        this.list = options.list;
        //this.input = this.$('.keyword');
        this.list.bind('add', this.add, this);
        this.list.bind('reset', this.reset, this);
        this.list.fetch();
        this.list.each(this.add);
    },
    add: function (item) {
        var view = new App.OneLineView({model: item});
        this.$('#todolist-list').append(view.render().el);
    },
    reset: function () {
        this.$('#todolist-list').empty();
    },
    createOnEnter: function (e) {
        if (e.keyCode != 13) {
            return;
        }
        //if (!this.input.val()) {
        //    return;
        //}
        //var keyword = this.input.val();
        //this.create(keyword);
        //this.input.val('');
    },
    //create: function (keyword) {
        //var index = this.list.length + 1;
        //this.list.create({keyword: keyword, index: index});
    //},
    clear: function () {
        // todo: isn't there a better way?
        //var i = 0;
        //var maxiter = 10;
        //while (true) {
        //    this.keywords.invoke('destroy');
        //    if (!this.keywords.length || ++i > maxiter) {
        //        break;
        //    }
        //}
    }
});

function onDomReady() {
    //App.model = new App.Model();

    App.todoList = new App.TodoList();
    //App.todoList.create(new App.Todo());
    //App.todoList.create(new App.Todo());
    //App.todoList.create(new App.Todo());
    //App.todoList.create(new App.Todo());
    App.todoListView = new App.TodoListView({
        //model: App.model,
        list: App.todoList
    });

    $('#reset').click(function () {
        //App.keywordsView.clear();
        //App.originalTab.text.val('');
        //App.originalTab.activate();
        //App.originalTab.text.focus();
    });

    // other initialization
    //App.todoListView.input.focus();
    //App.model.set({original: App.originalTab.text.text()});

    // debugging
    // add example item1
    // add example item2
    // add example item3
    //App.highlightedTab.activate();
    //App.keywordsView.create('lorem');
    //App.keywordsView.create('sollicit');
}

$(function () {
    onDomReady();
});
