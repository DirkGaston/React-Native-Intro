import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firstname = "Dirk", lastname = "Gastón" } = props;

  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};
