import {
    FormCreate,
    FormCreateProps as $FormCreateProps,
    FormRule as $FormRule,
    Options as $Options,
    Rule as $Rule,
    Creator as $Creator,
    Control as $Control,
    Api as $Api,
    Effect as $Effect,
    Parser as $Parser,
} from "@form-create/core";
import {ApiAttrs, CreatorAttrs, OptionAttrs, RuleAttrs} from "./config";
import {ExtractPropTypes} from "vue";

declare const formCreateMobile: FormCreate<{}, OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>;
export default formCreateMobile;
export declare const maker: typeof formCreateMobile.maker;
export type FormRule = $FormRule<OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>
export type Options = $Options<OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>
export type Rule = $Rule<OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>
export type Effect = $Effect<OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>
export type Creator = $Creator<OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>
export type Control = $Control<OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>
export type Api = $Api<OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>
export type FormCreateProps = ExtractPropTypes<$FormCreateProps<OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>>
export type Parser = $Parser
