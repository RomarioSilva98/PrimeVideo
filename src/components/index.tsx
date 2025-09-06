import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from "react-native"

interface MovieCardProps {
  movieURL: ImageSourcePropType;
  height?: number;
  // onPress?: () => void; // Optional press handler
}

export const MovieCard = ({ movieURL, height = 100 }: MovieCardProps) => {
  return(
    <TouchableOpacity>
      <Image 
        source={movieURL} 
        style={[styles.img, { height }]} // ← Altura dinâmica
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img:{
    marginRight: 20,
    width: 180,
    height: 100,
    borderRadius: 10,
  }

  

});