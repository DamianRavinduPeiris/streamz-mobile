import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

export const DrawerComponent = (): React.ReactElement => {
  const [visible, setVisible] = React.useState(false);
  const [selectedTitle, setSelectedTitle] = React.useState("No items selected");

  const onUsersPress = (): void => {
    setSelectedTitle("Users");
    setVisible(false);
  };

  const onOrdersPress = (): void => {
    setSelectedTitle("Orders");
    setVisible(false);
  };

  const onTransactionsPress = (): void => {
    setSelectedTitle("Transactions");
    setVisible(false);
  };

  const renderToggleButton = (): React.ReactElement => (
    <TouchableOpacity onPress={() => setVisible(true)} style={styles.button}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        STREAMZ
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderToggleButton()}
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.backdrop}
          onPress={() => setVisible(false)}
        >
          <View style={styles.menu}>
            <TouchableOpacity onPress={onUsersPress} style={styles.menuItem}>
              <Text>My Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onOrdersPress} style={styles.menuItem}>
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onTransactionsPress}
              style={styles.menuItem}
            >
              <Text>Watch Later</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onTransactionsPress}
              style={styles.menuItem}
            >
              <Text>Favourties</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 150,
    padding: 10,
    justifyContent: "center",
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    padding: 10,
  
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(1, 1, 1, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  menuItem: {
    padding: 10,
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
  },
});
