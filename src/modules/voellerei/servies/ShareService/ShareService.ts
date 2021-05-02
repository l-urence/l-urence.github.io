import {Recipe} from '../../models';
import {ShareError} from './ShareError';

export class ShareService {
  public static share(recipe: Recipe): void {
    if (typeof navigator.share === 'undefined') {
      throw new ShareError('Sharing not available');
    }

    navigator.share({
      url: 'https://byteburgers.com/voellerei',
      text: `◦ Test`,
      title: recipe.title,
    });
  }
}
