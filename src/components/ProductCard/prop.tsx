import {Product} from '../../models';

export default interface Props {
  product: Product;
  wrapperStyle: any;
  onPress: () => void;
}
