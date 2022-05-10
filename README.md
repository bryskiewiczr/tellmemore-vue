# Tell Me More

Please tell me more details about the job!<br>
https://tellmemore.today

## Origins

Hello,

this website was created as a weekend project caused by my frustration towards LinkedIn recruiters who failed to provide me with important details about opportunities they were offering me, even after lenghty conversations.

While it may seem that I am venting my frustration on the entirety of LinkedIn recruiter population, this is certainly not the case. Majority of them are very helpful and well-acquainted with the offers they are promoting. But then there's that small % of LinkedIn recruiter/headhunter population... :)

# Development

This project is a [NuxtJS](https://nuxtjs.org/) site deployed to production environment with [Vercel](https://vercel.com/).

I am not a web developer by trade, so I picked whatever solution was easiest for me.

## Getting started

It's a JavaScript project, so you'll need [Node](https://nodejs.org/en/). I've had some trouble running the newest version of Node.js, so you might need to use nvm (node version manager) and run `nvm use --lts` to use the lts version of node [16.15.0 [npm v8.5.5]].

    # clone the repository, etc.
    git clone https://github.com/bryskiewiczr/tellmemore-vue.git

    # dependencies
    yarn install        # install the dependencies (@nuxtjs/i18n, bootstrap, bootstrap-vue,
                                                    typed.js, vue-typed-js, vercel)
    # development
    yarn dev            # starts the development liveserver

    # production
    yarn build          # builds the package
    yarn generate       # generates the static page in ./dist
    yarn start          # serve the page

When deploying on Vercel, it had issues properly generating the static page, so I had to change the build command in Vercel project settings to `nuxt build && nuxt generate` to make it work properly.

# Translations

Website currently supports English and Polish languages.

Honestly, I don't expect anyone to put this in their bio apart from me and some of my closest friends.

If, however, for some reason there's need for further translations, please reach out to me and I am sure we will work something out, I'd be more than happy to support more languages, if only just for the sake of supporting more languages. :)

# Disclaimer

Once again, I did not mean to offend anyone with this project. I barely send it to anyone, I just keep it in my LinkedIn bio and to be quite frank, I think it's working. Or I've just been lucky recently.

Also, I am not a web developer, and this was my first experience working with Nuxt and Vue. I am really happy with the results and the project was very fun to work on. My first try was with React and Next.js, but I felt like that solution sub-optimal for my limited knowledge.

This was also very heavily inspired by [nohello.net](https://nohello.net), which I keep in my Slack and Microsoft Teams currently. Thanks guys!
