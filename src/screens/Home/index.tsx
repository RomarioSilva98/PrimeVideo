import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import PrimeVideoLogo from '../../assets/logo/prime_video.png';
import AmazonLogo from '../../assets/logo/amazon_logo.png';

import MovieTheWheel from '../../assets/movies/the_wheel_of_time.png';
import { MovieCard } from '@/src/components';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCH } from '../../utils/moviesWatch';

import { ScrollView } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={PrimeVideoLogo} />
        <Image style={styles.AmazonLogoImg} source={AmazonLogo} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentMovies}
      >
        <TouchableOpacity style={styles.movieImageThumbnail}>
          <Image source={MovieTheWheel} style={styles.movieImage} />
        </TouchableOpacity>

        <Text style={styles.movieText}>Continue Watching</Text>

        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}>Crime Movies</Text>

        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}>Watch in your language</Text>

        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => 
          <MovieCard 
          movieURL={item.moviesURL} 
           height={250}
          />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232f3e',
    alignItems: 'flex-start',
  },

  header: {
    width: '100%',
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: "row",
    // paddingHorizontal: 20,
    // marginBottom: 20,
  },

  AmazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    width: '100%',
    marginTop: 30,
    marginBottom: 15,
    // paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  categoryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  movieImageThumbnail: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 20,
  },

  movieImage: {
    width: '95%',
    // height: "100%",
    // borderRadius: 10,
  },

  movieText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    padding: 15,
  },

  contentList: {
    paddingLeft: 18,
    paddingRight: 30,
    marginBottom: 20,
  },

  contentMovies: {},
});
