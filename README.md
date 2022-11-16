# OGImage generator

This is a open-source project to generate dynamic Open-graph images using [@vercel/og](https://github.com/vercel/og-image) package.

The purpose is generate custom open-graph images passing an custom themes as param
- 🔗 [Demo 1](https://ogimage-generator-sigma.vercel.app/api/ogimage?title=Guia%20completo%20de%20como%20vender%20sem%20estoque?&image=https://d1ih8jugeo2m5m.cloudfront.net/2020/11/Como-vender-sem-ter-um-estoque-proprio.jpg&author=Victoria%20Salemi) with default theme
  - Ex.: `/api/ogimage?title=something&subtitle=Anything`
 
- 🔗 [Demo 2](https://ogimage-generator-sigma.vercel.app/api/ogimage?title=Guia%20completo%20de%20como%20vender%20sem%20estoque?&image=https://d1ih8jugeo2m5m.cloudfront.net/2020/11/Como-vender-sem-ter-um-estoque-proprio.jpg&author=Victoria%20Salemi&theme=blog) with custom theme as param ( &theme=blog)
  - Ex.: `/api/ogimage?title=something&subtitle=Anything&theme=blog`

## Requirements

- Node.js >16

## Creating a custom theme

The all themes are created on `./src/og-themes` folder. To create a new theme and keep available to use on api, follow these steps:

### Creating a new theme as React component

Go to `./src/og-themes` and create a new file. Ex.: `EventTheme.tsx`

```jsx
// ./src/og-themes/EventTheme.tsx

interface EventThemeProps {
  params: {
    title: string,
    subtitle: string
  };
}

function EventTheme({ params }: EventThemeProps) {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: '#ffcc00',
        fontSize: 40
      }}
    >
      {params.title}
      <br />
      {params.subtitle}
    </div>
  );
}

export { EventTheme };
```

After new theme already created, export it on `./src/og-themes/index.tsx`

```js
export { EventTheme } from '@themes/EventTheme';
```

And now you already to add the new theme to be available to use on api

Add a new case on `./src/pages/api/ogimage.tsx`

```js
// ./src/pages/api/ogimage.tsx
import { EventTheme } form '@themes/index';

...

switch (PARAMS.theme) {
    case 'event':
      selectedTheme = <EventTheme params={PARAMS} />;
      break;
    default:
      selectedTheme = <DefaultTheme params={PARAMS} />;
      break;
  }
```

Now you can run and test your new theme at localhost

## Get started

This project is running with NextJS, to run locally, install all dependencies
I use yarn to run all commands, but you can use npm if you want

**Install dependencies**

```sh
$ yarn install
```

**Run localhost**

```sh
$ yarn dev
```

Sample

```sh
http://localhost:3000/api/ogimage?title=My awesome title&subtitle=Front-end Developer&theme=event
```
