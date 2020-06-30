import { CheckboxModel } from '../../shared/models/checkbox.model';

export class CreateProfilePreferencesModel {

  locationPreferences : CheckboxModel[];
  languagePreferences : CheckboxModel[];
  audiences: CheckboxModel[];
  fees: number;


  constructor(init?: Partial<CreateProfilePreferencesModel>) {
    Object.assign(this, init);
  }

}
