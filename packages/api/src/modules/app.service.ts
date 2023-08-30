import { Injectable } from '@nestjs/common';
import ip from 'ip';

@Injectable()
export class AppService {
  getHello(): string {
    return `My ip address is ${ip.address()}`;
  }
}
