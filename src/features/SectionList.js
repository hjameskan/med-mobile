import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFresh: false,
    };
  }
  loadData = () => {
    // load animation, a circle that keeps rolling
    this.setState({
      isFresh: true,
    });

    // emulate fetch data, wait 1 second
    setTimeout(() => {
      this.setState({
        isFresh: false,
      });
    }, 1000);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          // Pull down to refresh
          refreshing={this.state.isFresh} // ratio of bottom, 0.1 = 10% to bottom
          onRefresh={this.loadData}
          // Pull up to refresh
          // onEndReachedThreshold={0.1}
          // onEndReached={() => {
          //   alert('bottom');
          // }}
          ListHeaderComponent={() => {
            return <Text style={{ fontSize: 40 }}>Heros!</Text>;
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default App;
