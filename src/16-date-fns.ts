import { subDays, format, sub} from 'date-fns';

const date = new Date(1999,1,28); // 0 = enero, 1 = feb
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);

