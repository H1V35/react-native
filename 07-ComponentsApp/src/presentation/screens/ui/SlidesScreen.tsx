import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { globalStyles } from '~/config/theme/theme';
import { Button } from '~/presentation/components/ui/Button';
import { ThemeContext } from '~/presentation/context/ThemeContext';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('~/presentation/assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('~/presentation/assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('~/presentation/assets/slide-3.png'),
  },
];

export function SlidesScreen() {
  const { colors } = React.useContext(ThemeContext);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const flatListRef = React.useRef<FlatList>(null);
  const navigation = useNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        onScroll={onScroll}
      />

      {currentSlideIndex === items.length - 1 ? (
        <Button
          text="End"
          style={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
          onPress={() => navigation.goBack()}
        />
      ) : (
        <Button
          text="Next"
          style={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        />
      )}
    </View>
  );
}

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item: { title, desc, img } }: SlideItemProps) => {
  const { colors } = React.useContext(ThemeContext);
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
        width,
      }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />

      <Text
        style={[
          globalStyles.title,
          {
            color: colors.primary,
          },
        ]}>
        {title}
      </Text>

      <Text
        style={{
          color: colors.text,
          marginTop: 20,
        }}>
        {desc}
      </Text>
    </View>
  );
};
