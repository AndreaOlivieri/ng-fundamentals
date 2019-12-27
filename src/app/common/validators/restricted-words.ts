import {FormControl} from '@angular/forms';

export function restrictedWords(words: any) {
  return (control: FormControl): {[key: string]: any} => {
    let errors = {};
    if (!!words) {
      const invalidWords = words
        .map(word => control.value.includes(word) ? word : null)
        .filter(w => w != null);
      if (invalidWords && invalidWords.length > 0) {
        errors = {
          restrictedWords: invalidWords.join(', ')
        };
      }
    }
    return errors;
  };
};
