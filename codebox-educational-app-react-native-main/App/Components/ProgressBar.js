// import React from 'react';
// import { Dimensions, View } from 'react-native';
// import * as Progress from 'react-native-progress';
// export default function ProgressBar({progress}) {
//   return (
//     <View>
//       <Progress.Bar progress={progress} 
//       width={Dimensions.get('screen').width*0.85} />
//     </View>
//   )
// }
// ProgressBar.js
import React from 'react';
import { Dimensions, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default function ProgressBar({ progress }) {
  return (
    <View>
      {/* Add testID to the Progress.Bar component */}
      <Progress.Bar
        progress={progress}
        width={Dimensions.get('screen').width * 0.85}
        testID="progress-bar" // Add testID here
      />
    </View>
  );
}
