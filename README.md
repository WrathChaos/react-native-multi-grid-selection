<img alt="React Native Multi Grid Selection" src="assets/logo.png" width="1050"/>

[![React Native Multi Grid Selection](https://img.shields.io/badge/-Fully%20customizable%20Multi%20Grid%20Card%20Selection%20component%20for%20React%20Native%20on%20both%20iOS%20and%20Android-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-multi-grid-selection)

[![npm version](https://img.shields.io/npm/v/react-native-multi-grid-selection.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-multi-grid-selection)
[![npm](https://img.shields.io/npm/dt/react-native-multi-grid-selection.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-multi-grid-selection)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Multi Grid Selection"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-multi-grid-selection
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": ">= 0.2.4"
```

# Usage

## Import

```jsx
import MultiGridSingleSelect from "react-native-multi-grid-selection";
```

## Fundamental Usage

```jsx
<MultiGridSingleSelect
  data={multiGridData}
  onSelect={(selectedData: any) => console.log("Selected Data: ", selectedData)}
/>
```

## Data Structure

You **MUST** follow this data structure to use the `react-native-multi-grid-selection`

```js
const testData: Array<IMultiSelectionDataType> = [
  {
    cardId: 0,
    title: "Title",
    data: [
      { id: 0, name: "Every week" },
      { id: 1, name: "Every other week" },
    ],
  },
  {
    cardId: 2,
    title: "Title2",
    data: [
      { id: 0, name: "Every week2" },
      { id: 1, name: "Every other week2" },
    ],
  },
  {
    cardId: 3,
    title: "Title3",
    data: [
      { id: 0, name: "Every week3" },
      { id: 1, name: "Every other week3" },
    ],
  },
  {
    cardId: 4,
    title: "Title4",
    data: [
      { id: 0, name: "Every week4" },
      { id: 1, name: "Every other week4" },
    ],
  },
];
```

## Interfaces

### IMultiSelectionDataType

```jsx
interface IMultiSelectionDataType {
  cardId: number;
  title: string;
  data: Array<ISelectionDataType>;
}
```

### ICardSelectionDataType

```jsx
export interface ICardSelectionDataType {
  cardId: number;
  title: string;
  selectedData: ISelectionDataType;
}
```

### ISelectionDataType

```jsx
export interface ISelectionDataType {
  id: number;
  name: string;
  data?: any;
}
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property |   Type   |  Default  | Description                                                            |
| -------- | :------: | :-------: | ---------------------------------------------------------------------- |
| data     |  string  | undefined | set the data for creating multi grid card system                       |
| onSelect | function | undefined | set your own logic for the selection functionality when it is selected |

## Customization (Optionals)

| Property             |   Type    |  Default  | Description                                                             |
| -------------------- | :-------: | :-------: | ----------------------------------------------------------------------- |
| listStyle            | ViewStyle |  default  | set or override the style object for the list style                     |
| cardStyle            | ViewStyle |  default  | set or override the style object for the card style                     |
| headerStyle          | ViewStyle |  default  | set or override the style object for the card header style              |
| headerTextStyle      | TextStyle |  default  | set or override the style object for the card header's text title style |
| buttonStyle          | ViewStyle |  default  | set or override the style object for each button style                  |
| buttonContainerStyle | ViewStyle |  default  | set or override the style object for each button style                  |
| buttonTextStyle      | TextStyle |  default  | set or override the style object for the card button text title style   |
| activeColor          |   color   | "#307ff2" | change the active color of the buttons                                  |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Multi Grid Selection is available under the MIT license. See the LICENSE file for more info.
