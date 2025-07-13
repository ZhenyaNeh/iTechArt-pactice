import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });
