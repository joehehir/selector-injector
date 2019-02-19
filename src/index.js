/*!
 *               __          __                   _         _           __
 *    ________  / /__  _____/ /_____  _____      (_)___    (_)__  _____/ /_____  _____
 *   / ___/ _ \/ / _ \/ ___/ __/ __ \/ ___/_____/ / __ \  / / _ \/ ___/ __/ __ \/ ___/
 *  (__  )  __/ /  __/ /__/ /_/ /_/ / /  /_____/ / / / / / /  __/ /__/ /_/ /_/ / /
 * /____/\___/_/\___/\___/\__/\____/_/        /_/_/ /_/_/ /\___/\___/\__/\____/_/
 *                                                   /___/
 * @author   Joe Hehir <hello@joehehir.com>
 * @homepage https://github.com/joehehir/selector-injector
 * @license  MIT
 */

export default (() => {
    const styleSheet = [...document.styleSheets].find(sheet => (sheet.disabled === false && sheet.media.mediaText !== 'print'));
    const injectedRulesets = {}; // 22: '#app',

    const valid = (selector, ruleset) => {
        const warn = error => console.error(`[selector-injector warn]: Error:\n\u0009\u003E ${error}`);
        return [
            [ // test stylesheet
                styleSheet,
                'No StyleSheet available.',
            ],
            [ // test arguments
                ([selector, ruleset].every(param => typeof param === 'string' && param.length) && RegExp(/^[{][^]*[}]$/igm).test(ruleset)),
                'Arguments error.',
            ],
        ].every((condition) => {
            if (!condition[0]) warn(condition[1]);
            return condition[0];
        });
    };

    const inject = (selector, ruleset = '{}') => {
        // validate
        if (!valid(selector, ruleset)) return;

        // overwrite ruleset
        if (Object.keys(injectedRulesets).length) {
            const existingSet = Object.entries(injectedRulesets).find(([key, value]) => styleSheet.cssRules[key] && value === selector);
            if (existingSet) {
                styleSheet.deleteRule(existingSet[0]);
                styleSheet.insertRule(`${selector} ${ruleset}`, existingSet[0]);
                // update reference
                injectedRulesets[existingSet[0]] = selector;
                return;
            }
        }
        // new ruleset
        const index = styleSheet.insertRule(`${selector} ${ruleset}`, styleSheet.cssRules.length);
        // store reference
        injectedRulesets[index] = selector;
    };

    const getInjectedList = () => Object.keys(injectedRulesets).map(index => styleSheet.cssRules[index] || null);

    return {
        getInjectedList,
        inject,
    };
})();
