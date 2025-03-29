import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const FooterComponent = ({loader}: {loader: boolean}) => {
  if (loader) {
    return <ActivityIndicator color={'black'} size={'large'} />;
  }
  return null;
};

const LazyLoading = () => {
  const [data, setData] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(0);

  const handleFetchingData = async () => {
    try {
      setLoader(true);
      const result = await fetch(
        `https://dummyjson.com/users?limit=10&skip=${page}`,
      );
      const response = await result.json();
      setData((prev: any) => [...prev, ...response?.users]);
      setPage(prev => prev + 1);
      setLoader(false);
    } catch (error) {
      console.log({error});
      setLoader(false);
    }
  };

  useEffect(() => {
    handleFetchingData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LazyLoading</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => {
          return (
            <View style={styles.renderItemContainer}>
              <Image
                source={{uri: item?.image}}
                resizeMode="contain"
                style={styles.image}
              />
              <View style={styles.gap} />
              <Text>
                {item?.firstName} {item?.lastName}
              </Text>
              <Text>{item?.email}</Text>
              <Text>{item?.birthDate}</Text>
              <Text>{item?.phone}</Text>
            </View>
          );
        }}
        contentContainerStyle={styles.flatlistContainer}
        onEndReachedThreshold={0.5}
        onEndReached={handleFetchingData}
        ListFooterComponent={<FooterComponent loader={loader} />}
      />
    </SafeAreaView>
  );
};

export default LazyLoading;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  renderItemContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {width: 50, height: 50},
  gap: {marginVertical: 3},
  flatlistContainer: {paddingBottom: 80},
});
