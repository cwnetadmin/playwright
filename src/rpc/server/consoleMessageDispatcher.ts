/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ConsoleMessage } from '../../console';
import { ConsoleMessageChannel, ConsoleMessageInitializer } from '../channels';
import { Dispatcher, DispatcherScope } from './dispatcher';
import { createHandle } from './elementHandlerDispatcher';

export class ConsoleMessageDispatcher extends Dispatcher<ConsoleMessage, ConsoleMessageInitializer> implements ConsoleMessageChannel {
  constructor(scope: DispatcherScope, message: ConsoleMessage) {
    super(scope, message, 'consoleMessage', {
      type: message.type(),
      text: message.text(),
      args: message.args().map(a => createHandle(scope, a)),
      location: message.location(),
    });
  }
}
