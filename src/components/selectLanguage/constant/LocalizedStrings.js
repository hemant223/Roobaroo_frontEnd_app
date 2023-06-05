import LocalizedStrings from 'react-native-localization';
import English from './English';
import Hindi from './Hindi';
import Marathi from './Marathi';
import Punjabi from './Punjabi';
import Tamil from './Tamil';
import Telugu from './Telugu';
import Gujrati from './Gujrati';
import Bhojpuri from './Bhojpuri';

let strings = new LocalizedStrings({
  English: English,
  Hindi: Hindi,
  Marathi:Marathi,
  Punjabi:Punjabi,
  Tamil:Tamil,
  Telugu:Telugu,
  Bhojpuri:Bhojpuri,
  Gujrati:Gujrati,
});

export default strings;
