import Hjson from "./lib/hjson.js"

type ParseOptions = {
	/** keep white space and comments. This is useful if you want to edit an hjson file and save it while preserving comments (default false) */
	keepWsc?: boolean, 
}

type StringifyOptions = {
	/** keep white space. See parse. */
	keepWsc?: boolean,
	/** will try to fit objects/arrays onto one line. Default 0 (off). */
	condense?: number,
	/** makes braces appear on the same line as the key name. Default false. */
	bracesSameLine?: boolean,
	/** show braces for the root object. Default true. */
	emitRootBraces?: boolean, 
	/** controls how strings are displayed. (setting separator implies "strings") */
	quotes?:  
		/** no quotes whenever possible (default) */
		"min" |
		/**  use quotes around keys */
		"keys"|
		/** use quotes around string values */
		"strings" | 
		/**  use quotes around keys and string values */
		"all",
	/** controls how multiline strings are displayed. (setting quotes implies "off") */
	multiline?:
		/** strings containing \n are shown in multiline format (default) */
		"std" |
		/** like std but disallow tabs */
		"no-tabs" |
		/** show in JSON format */
		"off",
	/** output a comma separator between elements. Default false */
	separator?: boolean
	/** specifies the indentation of nested structures. If it is a number, it will specify the number of spaces to indent at each level. If it is a string (such as '\t' or '&nbsp;'), it contains the characters used to indent at each level. */
	space?: number | string,
	/** specifies the EOL sequence (default is set by Hjson.setEndOfLine()) */
	eol?: string,
	/** output ascii color codes */
	colors?: boolean,
	/** when serializing objects into hjson, order the keys based on their UTF-16 code units order. Default false. */
	serializeDeterministically?: boolean,
}

const parse: (json: string, opts?: ParseOptions) => any = Hjson.parse;
const stringify: (obj: any, opts?: StringifyOptions) => string = Hjson.stringify;
const endOfLine: () => string = Hjson.endOfLine
const setEndOfLine: (eol?: string) => void = Hjson.setEndOfLine

export {
	parse, stringify, endOfLine, setEndOfLine
}