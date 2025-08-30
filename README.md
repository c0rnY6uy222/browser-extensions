# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

This solution helped me understand some concepts I wasn't sure about before. I learned how to use
React and it's amazing features like Hooks (frequently used useState, useRef) and props, CSS little bit more than my previous project

React snippet that I'm most proud of:

```js
const App = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav />
      <Filters />

      <section className="cards">
        {data.map((card, key) => (
          <Card
            key={key}
            name={card.name}
            description={card.description}
            logo={card.logo}
            isActive={card.isActive}
          />
        ))}
      </section>
    </>
  );
};
```

### Continued development

In my future development I urge to learn more about Hooks in React, when and how properly to use them so my code works with best performance, and learn more advanced CSS for styling my projects fast.

### Useful resources

- [Fetch Data](https://www.pluralsight.com/resources/blog/guides/fetch-data-from-a-json-file-in-a-react-app) - I learned how to fetch .json file and do stuff with it's data
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Very useful if you get stuck with CSS syntax

## Author

- Frontend Mentor - [@c0rnY6uy222](https://www.frontendmentor.io/profile/c0rnY6uy222)
- X - [Nathan282944](https://x.com/Nathan282944)
- Reddit - [Overall_Glove_3874](https://www.reddit.com/user/Overall_Glove_3874)
- Facebook - [Nathan Jackson](https://www.facebook.com/nathan.jackson.511111)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
