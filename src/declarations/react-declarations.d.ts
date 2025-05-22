// react-declarations.d.ts
import React from 'react';

declare global {
    namespace JSX {
        interface InherentAttributes extends React.HTMLAttributes<HTMLElement> { }

        // Интерфейс базовых HTML-элементов
        interface IntrinsicElements {
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            tr: React.DetailedHTMLProps<React.TableRowHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
            td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
            textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLStrongElement>, HTMLStrongElement>;
            em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLEMElement>, HTMLEMElement>;
            code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLFigureElement>, HTMLFigureElement>;
            figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLFigCaptionElement>, HTMLFigCaptionElement>;
            details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
            summary: React.DetailedHTMLProps<React.SummaryHTMLAttributes<HTMLSummaryElement>, HTMLSummaryElement>;
            main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMainElement>, HTMLMainElement>;
            nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLNavElement>, HTMLNavElement>;
            section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSectionElement>, HTMLSectionElement>;
            article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLArticleElement>, HTMLArticleElement>;
            aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLAsideElement>, HTMLAsideElement>;
            header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLFooterElement>, HTMLFooterElement>;
            video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            svg: React.SVGProps<SVGSVGElement>;
            path: React.SVGProps<SVGPathElement>;
            circle: React.SVGProps<SVGCircleElement>;
            rect: React.SVGProps<SVGRectElement>;
            g: React.SVGProps<SVGGElement>;
            use: React.SVGProps<SVGUseElement>;
            image: React.SVGProps<SVGImageElement>;
            text: React.SVGProps<SVGTextElement>;
            tspan: React.SVGProps<SVGTSpanElement>;
            defs: React.SVGProps<SVGDefsElement>;
            symbol: React.SVGProps<SVGSymbolElement>;
            linearGradient: React.SVGProps<SVGLinearGradientElement>;
            radialGradient: React.SVGProps<SVGRadialGradientElement>;
            stop: React.SVGProps<SVGStopElement>;
            animate: React.SVGProps<SVGAnimateElement>;
            animateMotion: React.SVGProps<SVGAnimateMotionElement>;
            animateTransform: React.SVGProps<SVGAnimateTransformElement>;
            set: React.SVGProps<SVGSetElement>;
            mpath: React.SVGProps<SVGMPathElement>;
            clipPath: React.SVGProps<SVGClipPathElement>;
            mask: React.SVGProps<SVGMaskElement>;
            filter: React.SVGProps<SVGFilterElement>;
            feBlend: React.SVGProps<SVGFEBlendElement>;
            feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
            feComposite: React.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
            feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
            feFlood: React.SVGProps<SVGFEFloodElement>;
            feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
            feImage: React.SVGProps<SVGFEImageElement>;
            feMerge: React.SVGProps<SVGFEMergeElement>;
            feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: React.SVGProps<SVGFEMorphologyElement>;
            feOffset: React.SVGProps<SVGFEOffsetElement>;
            feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
            feTile: React.SVGProps<SVGFETileElement>;
            feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
            foreignObject: React.SVGProps<SVGForeignObjectElement>;
            marker: React.SVGProps<SVGMarkerElement>;
            script: React.SVGProps<SVGScriptElement>;
            style: React.SVGProps<SVGStyleElement>;
            title: React.SVGProps<SVGTitleElement>;
            desc: React.SVGProps<SVGDescElement>;
            metadata: React.SVGProps<SVGMetadataElement>;
            view: React.SVGProps<SVGViewElement>;
        }
    }
}