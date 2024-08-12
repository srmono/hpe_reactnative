import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  TextInput,
  Button,
  Menu,
  PaperProvider ,
  Divider,
  Modal,
  Portal,
} from "react-native-paper";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is require"),
  email: Yup.string().email("Invalid Email").required("Email is require"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confimPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Must match")
    .required("Password is required"),
  birthDate: Yup.date().required("Birth Date is required"),
});

const DemoForm = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Selected Option");
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    // <Screen>
    <PaperProvider>
      <Portal>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            birthDate: "",
          }}
          validationSchema={validationSchema}
        //   onSubmit={(values) => console.log("Form Values: ", values)}
            onSubmit={values => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View style={styles.container}>
              <TextInput
                label="Name"
                mode="outline"
                style={[
                  styles.input,
                  touched.name && errors.name ? styles.errorInput : null,
                ]}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                activeOutlineColor="#6200ee"
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}> {errors.name} </Text>
              )}

              <TextInput
                label="Email"
                mode="outline"
                style={[
                  styles.input,
                  touched.email && errors.email ? styles.errorInput : null,
                ]}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                activeOutlineColor="#6200ee"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}> {errors.email} </Text>
              )}

              <TextInput
                label="Password"
                mode="outline"
                secureTextEntry
                style={[
                  styles.input,
                  touched.password && errors.password
                    ? styles.errorInput
                    : null,
                ]}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                activeOutlineColor="#6200ee"
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}> {errors.password} </Text>
              )}

              <TextInput
                label="Comfirm Password"
                mode="outline"
                secureTextEntry
                style={[
                  styles.input,
                  touched.confirmPassword && errors.confirmPassword
                    ? styles.errorInput
                    : null,
                ]}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                activeOutlineColor="#6200ee"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}> {errors.confirmPassword} </Text>
              )}

              

              <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchor={<TouchableOpacity
                    style={styles.dropdown}
                    onPress={() => setMenuVisible(true)}
                  >
                    <Text style={styles.dropdownText}>{selectedOption}</Text>
                  </TouchableOpacity>}

              >
                <Menu.Item
                  onPress={() => {
                    setSelectedOption("Option 1");
                    setMenuVisible(false);
                  }}
                  title="Option 1"
                />
                <Menu.Item
                  onPress={() => {
                    setSelectedOption("Option 2");
                    setMenuVisible(false);
                  }}
                  title="Option 2"
                />
                <Menu.Item
                  onPress={() => {
                    setSelectedOption("Option 3");
                    setMenuVisible(false);
                  }}
                  title="Option 3"
                />
              </Menu>

              <TouchableOpacity
                style={styles.datePickerButton}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={styles.datePickerText}>
                  {" "}
                  {date.toDateString()}
                </Text>
                {showDatePicker && (
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                  />
                )}
              </TouchableOpacity>

              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.submitButton}
              >
                {" "}
                Submit{" "}
              </Button>

              <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>

            </View>
          )}

        </Formik>
      </Portal>
    </PaperProvider>
    // </Screen>
  );
};

export default DemoForm;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 16,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
  },
  dropdownText: {
    color: "black",
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    alignItems: "center",
  },
  datePickerText: {
    color: "black",
  },
  submitButton: {
    marginTop: 20,
  },
});
