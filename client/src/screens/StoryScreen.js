// @flow

import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ProgressBar from '../utilities/ProgressBar';

/**
 *
 * @param {route} param0 route prop
 * @param {navigation} param1 navigaiton prop
 * @returns Story Screen
 */
function StoryScreen({route, navigation}) {
  /** Accesing stories and handleBorderActivity function from route */
  const {stories, handleBorderActivity} = route.params;
  const userStories = stories.stories;

  /** To keep a track of the current story to be displayed on the screen */
  const [curStory, setCurStory] = useState(0);

  /** Utility function for the functioning of the progress bar */
  const useProgress = (maxTimeInSeconds = 5) => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (progress < 1) {
          setElapsedTime(t => t + 0.166);
        }
      }, 100);

      return function cleanup() {
        clearInterval(intervalId);
        handleBorderActivity.handleBorderActivity();
      };
    }, [progress]);

    useEffect(() => {
      if (elapsedTime / maxTimeInSeconds <= 1) {
        setProgress(elapsedTime / maxTimeInSeconds);
      } else {
        setProgress(1);
      }
    }, [elapsedTime, maxTimeInSeconds]);

    return progress;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (curStory !== userStories.length - 1) {
        setCurStory(curStory + 1);
      } else {
        setCurStory(0);
        navigation.navigate('Home');
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [curStory, navigation, userStories]);

  const progress = useProgress();

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <Image
        style={styles.image}
        source={{uri: userStories[curStory].imageLink}}
      />
      <View>
        <Text style={styles.Headline}>Headline of the story.</Text>
      </View>
      <View>
        <Text style={styles.opinion}>User opinion regarding the news.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#264d73',
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
    height: 200,
    width: 300,
    borderRadius: 20,
  },
  Headline: {
    marginTop: 20,
    fontSize: 15,
    color: 'white',
  },
  opinion: {
    marginTop: 50,
    fontSize: 30,
    width: 300,
    color: 'white',
    textAlign: 'center',
  },
});

export default StoryScreen;
