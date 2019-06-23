// Core
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';

// Constants
import { SOURCE, STATICS } from '../../constants';

export const loadFonts = () => ({
    module: {
        rules: [
            {
                test:    /\.woff2?(\?v=\d+\.\d+\.\d+)?|otf|ttf|eot|woff$/,
                include: [ SOURCE, STATICS ],
                use:     {
                    loader:  'file-loader',
                    options: {
                        name: 'fonts/[name].[hash:5].[ext]',
                    },
                },
            }
        ],
    },
});

export const loadImages = () => ({
    module: {
        rules: [
            {
                test:    /\.jpe?g|png|svg|gif|jpg$/,
                include: [ SOURCE, STATICS ],
                use:     {
                    loader:  'url-loader',
                    options: {
                        fallback: 'file-loader',
                        name:     'images/[name].[hash:5].[ext]',
                    },
                },
            }
        ],
    },
});

export const setupFavicon = () => ({
    plugins: [
        new FaviconsWebpackPlugin({
            logo:            './static/favicon/favicon.svg',
            prefix:          'images/favicon/icon-[hash]',
            statsFilename:   'iconstats-[hash].json',
            persistentCache: true,
        })
    ],
});

export const setupHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            inject:   false,
            template: HtmlWebpackTemplate,
            title:    'Weather - websites | Weather',
            favicon:  `${STATICS}/favicon/logo.png`,
            lang:     'en',
            meta:     [
                {
                    name:    'viewport',
                    content: 'user-scalable=no, width=device-width, initial-scale=1, shrink-to-fit=no',
                },
                {
                    name:    'robots',
                    content: 'noindex, nofollow',
                },
                {
                    name:    'keywords',
                    content: 'Weather',
                },
                {
                    name:    'theme-color',
                    content: '#fff',
                },
                {
                    name:    'description',
                    content: 'Weather websites',
                },
                {
                    name:    'og:type',
                    content: 'website',
                },
                {
                    name:    'og:title',
                    content: 'Weather - websites | Weather',
                },
                {
                    name:    'og:description',
                    content: 'Weather',
                },
                {
                    name:    'og:image',
                    content: 'url',
                }
            ],
            links: [
                {
                    rel:  'stylesheet',
                    href: 'https://cdn.jsdelivr.net/gh/mailtoharshit/San-Francisco-Font-/sanfrancisco.css',
                }
            ],
            appMountIds: [ 'app', 'portal', 'modal' ],
        })
    ],
});
