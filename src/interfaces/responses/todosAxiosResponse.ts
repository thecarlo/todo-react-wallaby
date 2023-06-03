import { Todo } from '@interfaces/todo';

import { BaseAxiosResponse } from './baseAxiosResponse';

export interface TodosAxiosResponse extends BaseAxiosResponse {
  data: Todo[];
}
