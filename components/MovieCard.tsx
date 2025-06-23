import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({ item }: { item: Movie }) => {
  return (
    <Link href={`/movies/${item?.id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: item?.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "https://via.placeholder.com/150",
          }}
          className="w-full h-52 rounded-lg mb-2"
          resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold" numberOfLines={1}>
          {item?.title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs font-bold uppercase text-white">
            {Math.round(item?.vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between mt-1">
          <Text className="mt-1 text-light-300 text-xs font-medium">
            {item?.release_date?.split("-")[0]}
          </Text>
          <Text className="text-light-300 text-xs font-medium uppercase mt-1">
            Movie
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
