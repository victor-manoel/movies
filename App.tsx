import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Movie} from '@/app/Movie';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Movie/>
    </>
  );
}

