<h1 align="center">
  Eureka Moment
</h1>

Website: [Eureka Moment](https://eureka-moment.web.app/). Written in React using GatsbyJS and Bulma CSS, hosted on Firebase.

This was a short experiment in building an online C++ "textbook". The idea was for students to learn C++ by writing small apps in the language, tackling new concepts as they progressed. I developed lessons that built upon one another and naturally surfaced new topics when the student discovered a need for them. For example, lesson 3 teaches students how to build a multi-dimensional array. As the student becomes familiar with this concept, they discover what pointers are and how they enable multi-dimensional arrays to work. 

My mentee (the site's primary user) had to terminate the experiment after the third lesson for reasons unrelated to the project, but building it has taught me a lot about the work and planning that goes into making a textbook.

## Poking Around

If you want to check out the live site, go to the [login page](https://eureka-moment.web.app/account) and log in with the following credentials:
```
username: test@test.test
password: testing123
```

Then visit the [lessons page](https://eureka-moment.web.app/lessons) to try it out!

## Requirements

- React
- Gatsby
- Bulma

## 🚀 Quick start

1.  **Clone the repo**

    ```shell
    git clone https://github.com/godith0/eureka-moment.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd eureka-moment/
    npm install
    gatsby develop
    ```
    
1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `eureka-moment` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
    
1.  **Set up Firebase**
    
    Set up a Firebase app to handle your db. You can find instructions [here](https://firebase.google.com/docs/web/setup). Skip the step for initializing Firebase (Step 3 at the time of this writing), since that's already done by the codebase. For your app's config: 
    
    ```shell
    cp .env.sample .env.production  # can also do .env.development
    vi .env.production  # or your favorite code editor
    ```
    
    Then manually update the values in your newly created file. 
