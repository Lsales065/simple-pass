import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = Platform.select({ ios: 375, android: 360, web: width });
const guidelineBaseHeight = Platform.select({ ios: 667, android: 640, web: height });

/**
 * Função para calcular escala horizontal
 * @param {number} size
 * @returns tamanho escalado
 */
export const scale = (size) => {
    return (width / guidelineBaseWidth) * size;
};

/**
 * Função para calcular a escala moderada
 * @param {number} size
 * @param {number} factor
 * @returns tamanho mesclado com valor absoluto e escalado
 */
export const moderateScale = (size, factor = 0.5) => {
    return size + (scale(size) - size) * factor;
};

/**
 * Função para calcular escala vertical
 * @param {number} size
 * @returns tamanho escalado
 */
export const verticalScale = (size) => {
    return (height / guidelineBaseHeight) * size;
};

/**
 * Cores usadas na aplicação
 */
export const colors = {
    background: '#00BFFF',
    primary: '#0099CC',
    secondary: '#1E1E1E',
    green: '#22C55E',
    gray: '#D9D9D9',
    red: '#E30000',
    lightGray: '#D9D9D980',
    darkGray: '#4E776B',
    white: '#FFFFFF',
    black: '#000000',
};

/**
 * Espaçamentos usados na aplicação
 */
export const spacing = {
    xs: Platform.OS === 'web' ? `${scale(4)}px` : scale(4),
    sm: Platform.OS === 'web' ? `${scale(8)}px` : scale(8),
    md: Platform.OS === 'web' ? `${scale(16)}px` : scale(16),
    lg: Platform.OS === 'web' ? `${scale(24)}px` : scale(24),
    xl: Platform.OS === 'web' ? `${scale(32)}px` : scale(32),
};

/**
 * Tamanhos de fontes da aplicação
 */
export const fontSize = {
    small: Platform.OS === 'web' ? `${moderateScale(12)}px` : moderateScale(12),
    medium: Platform.OS === 'web' ? `${moderateScale(16)}px` : moderateScale(16),
    large: Platform.OS === 'web' ? `${moderateScale(20)}px` : moderateScale(20),
};
