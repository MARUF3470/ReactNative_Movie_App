import React from "react";
import { Text, View } from "react-native";

const MovieDetails = ({ id }: { id: string }) => {
  console.log(id);
  return (
    <View>
      <Text>MovieDetails</Text>
    </View>
  );
};

export default MovieDetails;
