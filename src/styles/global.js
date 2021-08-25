import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --very-dark-blue: hsl(243, 87%, 12%);

  --desaturated-blue: hsl(238, 22%, 44%);

  --bright-blue: hsl(224, 93%, 58%);
  --moderate-cyan: hsl(170, 45%, 43%);

  --light-grayish-blue: hsl(240, 75%, 98%);
  --light-gray: hsl(0, 0%, 75%);

}
  /*
## Typography

### Headings, Call-to-actions, Header Navigation

- Family: [Raleway](https://fonts.google.com/specimen/Raleway)
- Weights: 400, 700

### Body

- Family: [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- Weights: 400
}*/


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}


 h1,h2,h3,h4,h5,h6, strong{
  
  font-family: "Raleway", sans-serif;
  font-weight: 700;
 }

p{
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}

body{
  background: var(--light-grayish-blue);
    width: 1336px;
    height: 768px;
  
}


`;