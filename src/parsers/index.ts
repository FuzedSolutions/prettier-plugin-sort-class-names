import { CreateSortClassList, SortClassList } from '../sort-class-list'
import angular from './angular'
import babel from './babel'
import css from './css'
import html from './html'
import typescript from './typescript'

export default (cscl: CreateSortClassList) => ({
	angular: angular(cscl),
	html: html(cscl),
	css: css(cscl),
	babel: babel(cscl),
	typescript: typescript(cscl),
})
