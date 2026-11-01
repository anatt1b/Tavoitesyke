import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // Ikä tallenetaan tekstinä, koska kenttä voi olla myös tyhjä
  const [age, setAge] = useState<string>('');

  // Muutetaan teksti numeroksi. Jos teksti ei ole numero, ageNumber on NaN
  const ageNumber: number = parseFloat(age);
  // true = ikä on oikea numero,, false = ikä ei ole numero (NaN)
  const isValidAge: boolean = !isNaN(ageNumber);

  // Lasketaan alaraja ja yläraja vain, jos ikä on oikea numero
  const lowerLimit: number = isValidAge ? (220 - ageNumber) * 0.65 : 0;
  const upperLimit: number = isValidAge ? (220 - ageNumber) * 0.85 : 0;

  // Ruudulla näytettävä sisältö
  return (
    // Pääkontti, jonka sisällä kaikki muu on
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
        style={styles.input}
        value={age}                       // kentäässä näkyy age-muuttujan arvo
        onChangeText={setAge}             // jokainen näppäily ppäivittää age-muuttujan
        keyboardType="numeric"            // puhelin avaa numeronäppäimistön
      />

      {/* toFixed(2) = kaksi desimaalia*/}
      <Text>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,            // tyättää koko ruudun
    padding: 20,        // tilaa reunoille
    marginTop: 150,      // ettei sisältö mene puhelimen yläpalkin alle
  },
  title: {
    fontSize: 24,       // is otsikko
    fontWeight: 'bold', // lihavointi
    marginBottom: 16,   // väli otsikon ja muun sisällön väliin
  },
  input: {
    borderWidth: 1,     // reunaviiva
    borderRadius: 4,    // pyöristetyt kulmat
    width: 80,          // kentän leveys
    padding: 8,         // tekstin ja reunan väli
    marginVertical: 8,  // väli kentän ylä- ja alapuolelle
  },
});
