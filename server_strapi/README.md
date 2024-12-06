# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>




# Quick Start Guide
> This is the Devine Web3 version of the offical [Quick Start
Guide](https://docs.strapi.io/dev-docs/quick-start) of Strapi. We mainly skipped
the parts that are forcing us to deploy the project to Strapi cloud. This is a way
to deploy your project online, but this also comes with a cost. Sadly, there is
only a 14-day free trial, so that's not a good option for us. We will focus on the
local development part of the guide. In the end we've added some extra tips and
tricks and a small introduction to the REST API.
Strapi offers a lot of flexibility. Whether you want to go fast and quickly see the
final result, or would rather dive deeper into the product, we got you covered. For
this tutorial, we'll go for the DIY approach and build a project and data structure
from scratch, then we will add some data.
## Prerequisites
- Node.js: Only [Active LTS or Maintenance LTS
versions](https://nodejs.org/en/about/previous-releases) are supported (currently
v18 and v20). Odd-number releases of Node, known as "current" versions of Node.js,
are not supported (e.g. v19, v21).
- npm (v6 and above)
- Python (if unsing a SQL database)
## Part A: Create a new project with Strapi🚀
We will first create a new Strapi project on your machine by running a command in
the terminal, and then register our first local administrator user.
### Step 1: Run the installation script
1. Run the following command in a terminal:
```bash
npx create-strapi@latest my-strapi-project
```
2. The terminal will invite you to create a Strapi Cloud account and start a free,
14-day trial. **You don't need this** Use the arrow keys to skip it, and press
Enter.
3. The terminal will now ask you a few questions. Press `Enter` to accept the
default answer, except for Typescript, where you should answer `No`.
```text
? Please log in or sign up. Skip
? Do you want to use the default database (sqlite) ? Yes
? Start with an example structure & data? No
? Start with Typescript? No
? Install dependencies with npm? Yes
? Initialize a git repository? Yes
```
Tip: Watch out with the latest question: you don't always want to initialize a
git repository
As you will see in the terminal, your project is now building locally.
Many more installation options are available. Please refer to the [installation
documentation](/dev-docs/installation) for details.
### Step 2: Register the first local administrator user
Once the installation is complete, you need to start the server. In the terminal,
type `cd my-strapi-project && npm run develop` and your browser automatically opens
a new tab.
TIP: As long as you stay in the `my-strapi-project` folder, you will just need to
run `npm run develop` any time you want to start the Strapi server again.
TIP: Do you prefer to run `npm run dev` instead of `npm run develop`? No problem,
feel free to change the `scripts` section in the `package.json` file of your
project.
By completing the form, you create your own account. Once done, you become the
first administrator user of this Strapi application. Welcome aboard, commander!
You now have access to the [admin panel](http://localhost:1337/admin):
🥳 CONGRATULATIONS!
You have just created a new Strapi project!
## Part B: Build your data structure with the Content-type Builder🛠
The installation script has just created an empty project. We will now guide you
through creating a restaurants directory, inspired by our
[FoodAdvisor](https://github.com/strapi/foodadvisor) example application.
The admin panel of a local Strapi project runs at [http://localhost:1337/admin]
(http://localhost:1337/admin). This is where you will spend most of your time
creating and updating content.
First we will build a data structure for your content. This can only be done while
in development mode, which is the default mode for projects that are created
locally.
TIP: If the server is not already running, in your terminal, `cd` into the `my-
strapi-project` folder and run `npm run develop` to launch it.
The Content-Type Builder helps you create your data structure. When creating an
empty project with Strapi, this is where to get the party started!
### Step 1: Create a "Restaurant" collection type
Your restaurants directory will eventually include many restaurants, so we need to
create a "Restaurant" collection type. Then we can describe the fields to display
when adding a new restaurant entry:
1. Click on the **Create your first Content type** button.
If it's not showing up, go to [Content-Type Builder](http://localhost:1337/admin/
plugins/content-type-builder) in the main navigation.
2. Click on **Create new collection type**.
3. Type `Restaurant` for the *Display name*, and click **Continue**.
4. Click the Text field.
5. Type `Name` in the *Name* field.
6. Switch to the *Advanced Settings* tab, and check the **Required field** and the
**Unique field** settings.
7. Click on **Add another field**.
8. Choose the Rich text (Blocks) field in the list.
9. Type `Description` under the *Name* field, then click **Finish**.
10. Finally, click **Save** and wait for Strapi to restart.
Once Strapi has restarted, "Restaurant" is listed under *Content Manager >
Collection types* in the navigation. Wow, you have just created your very first
content-type! It was so cool — let's create another one right now, just for
pleasure.
### Step 2: Create a "Category" collection type
It would help getting a bit more organized if our restaurants directory had some
categories. Let's create a "Category" collection type:
1. Go to [Content-type Builder](http://localhost:1337/admin/plugins/content-type-
builder) in the main navigation.
2. Click on **Create new collection type**.
3. Type `Category` for the *Display name*, and click **Continue**.
4. Click the Text field.
5. Type `Name` in the *Name* field.
6. Switch to the *Advanced Settings* tab, and check the **Required field** and the
**Unique field** settings.
7. Click on **Add another field**.
8. Choose the Relation field.
9. In the center, select the icon that represents "many-to-many". The text should
read `Categories has and belongs to many Restaurants`.
10. Finally, click **Finish**, then the **Save** button, and wait for Strapi to
restart.
🥳 CONGRATULATIONS!
You have just created a basic data structure for your Strapi project! You can keep
on playing with the [Content-Type Builder](/user-docs/content-type-builder), or
proceed to the next parts.
## Part C: Add content to your Strapi project with the Content Manager📝
Now that we have created a basic data structure with 2 collection types,
"Restaurant" and "Category", let us actually add content by creating new entries.
### Step 1: Create an entry for the "Restaurant" collection type
1. Go to *Content Manager > Collection types - Restaurant* in the navigation.
2. Click on **Create new entry**.
3. Type the name of your favorite local restaurant in the *Name* field. Let's say
it's `Biscotte Restaurant`.
4. In the *Description* field, write a few words about it. If you're lacking some
inspiration, you can use "Welcome to Biscotte restaurant! Restaurant Biscotte
offers a cuisine based on fresh, quality products, often local, organic when
possible, and always produced by passionate producers."
5. Click **Save**.
The restaurant is now listed in the *Collection types - Restaurant* view of the
*Content Manager*.
### Step 2: Add Categories
Let's go to *Content Manager > Collection types - Category* and create 2
categories:
1. Click on **Create new entry**.
2. Type `French Food` in the *Name* field.
3. Click **Save**.
4. Go back to *Collection types - Category*, then click again on **Create new
entry**.
5. Type `Brunch` in the *Name* field, then click **Save**.
The "French Food" and "Brunch" categories are now listed in the *Collection types -
Category* view of the *Content Manager*.
Now, we will add a category to a restaurant:
1. Go to *Content Manager > Collection types - Restaurant* in the navigation, and
click on "Biscotte Restaurant".
2. In the **Categories** drop-down list at the bottom of the page, select "French
Food". Scroll back to the top of the page and click **Save**.
### Step 3: Set Roles & Permissions
We have just added a restaurant and 2 categories. We now have enough content to
consume (pun intended). But first, we need to make sure that the content is
publicly accessible through the API:
1. Click on *Settings* at the bottom of the main navigation.
2. Under *Users & Permissions Plugin*, choose *Roles*.
3. Click the **Public** role.
4. Scroll down under *Permissions*.
5. In the *Permissions* tab, find *Restaurant* and click on it.
6. Click the checkboxes next to **find** and **findOne**.
7. Repeat with *Category*: click the checkboxes next to **find** and **findOne**.
8. Finally, click **Save**.
### Step 4: Publish the content
By default, any content you create is saved as a draft. Let's publish our
categories and restaurant.
First, navigate to *Content Manager > Collection types - Category*. From there:
1. Click the "Brunch" entry.
2. On the next screen, click **Publish**.
3. In the *Confirmation* window, click **Yes, publish**.
Then, go back to the Categories list and repeat for the "French Food" category.
Finally, to publish your favorite restaurant, go to *Content Manager > Collection
types - Restaurant*, click the "Biscotte Restaurant" entry, and **Publish** it.
### Step 5: Use the API
OK dear gourmet, we have just finished creating our content and making it
accessible through the API. You can give yourself a pat on the back — but you have
yet to see the final result of your hard work.
There you are: the list of restaurants should be accessible by visting the
`/api/restaurants` path of your project URL (e.g.,
`http://localhost:1337/api/restaurants`).
Try it now! The result should be similar to the example response below .👇
```json
{
"data": [
{
"id": 3,
"documentId": "wf7m1n3g8g22yr5k50hsryhk",
"Name": "Biscotte Restaurant",
"Description": [
{
"type": "paragraph",
"children": [
{
"type": "text",
"text": "Welcome to Biscotte restaurant! Restaurant Biscotte offers a
cuisine based on fresh, quality products, often local, organic when possible, and
always produced by passionate producers."
}
]
}
],
"createdAt": "2024-09-10T12:49:32.350Z",
"updatedAt": "2024-09-10T13:14:18.275Z",
"publishedAt": "2024-09-10T13:14:18.280Z",
"locale": null
}
],
"meta": {
"pagination": {
"page": 1,
"pageSize": 25,
"pageCount": 1,
"total": 1
}
}
}
```
🥳 CONGRATULATIONS!
Now your content is created, published, and you have permissions to request it
through the API.
Keep on creating amazing content!
## Usefull tips and tricks
- You can switch of the draft feature when you are creating a new content type.
This option is available in the advanced settings of the content type builder.
- Write the names of the fields of your content types in lowercase. This will make
more sense when we are consuming the API. Those fiels will be the properties of the
JSON object, and you typically want to use lower- or camelCase for those.
## REST API
You have just requested your content through the API. Let us dig a bit deeper into
the REST API. The REST API is the default way to interact with your Strapi project.
It is a set of endpoints that allow you to create, read, update, and delete
content. Read the [APIs Introduction &
Concepts](https://docs.strapi.io/dev-docs/api/content-api) for more context.
There is a REST and GraphQL API available for your Strapi project. They both have
their own advantages and use cases. For this course, we will focus on the REST API.
There is [a lot to cover](https://docs.strapi.io/dev-docs/api/rest), the following
is just a quick overview.
To do different operations on the API, you need to use different HTTP methods. The
most common ones are:
|CRUD|HTTP Method|Description|
|---|---|---|
|Create|POST|Create a new entry|
|Read|GET|Retrieve an entry or a list of entries|
|Update|PUT|Update an entry|
|Delete|DELETE|Delete an entry|
PATCH is also a method that is used to update an entry. It is similar to PUT, but
it only updates the fields that are provided in the request.
### REST Client
It is convenient to use a tool like [Insomnia](https://insomnia.rest/), [Postman]
(https://www.postman.com/) or [HTTPie](https://httpie.io/) to interact with the
API. Let us use the last one since it is the easiest to get started with. (Use the
desktop version, the web one can't connect to the local URLs we are using. The
terminal version is also fine )🤓
In the address bar of HTTPie, enter `http://localhost:1337/api/restaurants` and
press `send`. You should see the same response as before in the browser, but now in
the result window.
Now list the categories, I'm sure you can do it! 🤓
### Populate and Select
Read how you can [select certain
fields](https://docs.strapi.io/dev-docs/api/rest/populate-select#field-selection)
and [populate relations](https://docs.strapi.io/dev-docs/api/rest/populate-
select#population) in the REST API.
Now try the following:
- Get all the categories, but only the name field.
- Get all the restaurants, but only the name and description fields.
- Get all the restaurants, but also include the categories.
