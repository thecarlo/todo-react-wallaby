import { Todo } from '@interfaces/todo';

import { BaseAxiosResponse } from './baseAxiosResponse';

export interface TodoAxiosResponse extends BaseAxiosResponse {
  data: Todo;
}
