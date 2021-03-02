import { Settings } from '../models/settings.model';

/**
 * Initial settings for the application, that would load when the user hasn't setup any previous configuration, or simply wants to reset it.
 */
export const initialSettings: Settings = {
  backgroundColor: '#0366d6',
  minimumStars: 40,
  maxResults: 3
};
