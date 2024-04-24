# Pokedex App

## 😺 Description

Pokedex App is a native Android and iOS application built with React Native and Expo using TypeScript. It provides a comprehensive database of Pokémon, including their stats, abilities, and other relevant information. The app includes several key screens:

- Pokémon List
- Pokémon Search
- Pokémon Detail Page

The information for each Pokémon is fetched from the API [PokeAPI](https://pokeapi.co/).

## 🧞 Requirements

The following requirements and guidelines were followed to achieve the functionality of the app:

- Utilize React Native with navigaton for smooth transitions between screens, a store, and native components.
- Make API requests using Axios and TanStack Query.
- Implement a responsive UI that adapts to different screen sizes and orientations.

## 📱 Screens

### Pokémon List

- Home screen to show all existing pokemons in the pokedex.
- Asynchronously loading Pokémon information in a paginated list. The list dynamically loads as the user scrolls vertically (infinite scroll).
- Redirects to the Pokémon Search Page by clicking the search icon.
- Redirects to the Pokémon Detail Page by clicking a Pokémon in the list.

### Pokémon Search

- Allows users to search for Pokémon by name or ID.
- Applies a debounce function to prevent excessive API requests while typing.

### Pokémon Detail Page

- Display detailed information about the selected Pokémon, including its stats, abilities, and type.
- Showcase an image and sprites of the Pokémon.

## 📚 Technologies Used

- React Native
- Expo
- TypeScript
- Axios
- TanStack Query

## 👨‍💻 Installation

To run the Pokedex App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/H1V35/pokedex-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pokedex-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app for Android or iOS using Metro:
   ```bash
   npm start
   ```

## 🔍 Acknowledgements

- [PokeAPI](https://pokeapi.co/) for providing the data source for Pokémon information.
- [Expo](https://expo.dev/) for simplifying the development and deployment process for React Native apps.
