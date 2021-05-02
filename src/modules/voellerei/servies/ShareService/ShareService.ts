import {Recipe} from '../../models';
import {ShareError} from './ShareError';

export class ShareService {
  public static share(recipe: Recipe): void {
    if (typeof navigator.share === 'undefined') {
      throw new ShareError('Sharing not available');
    }

    navigator.share({
      url: 'https://byteburgers.com/voellerei',
      text: '<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">',
      title: recipe.title,
    });
  }
}
