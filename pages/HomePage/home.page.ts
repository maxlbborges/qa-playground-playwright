import { BasePage } from "@pages/base.page"

export enum HomePageLinks {
    DYNAMIC_ID = 'Dynamic ID',
    CLASS_ATTRIBUTE = 'Class Attribute',
    HIDDEN_LAYERS = 'Hidden Layers',
    LOAD_DELAY = 'Load Delay',
    AJAX_DATA = 'AJAX Data',
    CLIENT_SIDE_DELAY = 'Client Side Delay',
    CLICK = 'Click',
    TEXT_INPUT = 'Text Input',
    SCROLLBARS = 'Scrollbars',
    DYNAMIC_TABLE = 'Dynamic Table',
    VERIFY_TEXT = 'Verify Text',
    PROGRESS_BAR = 'Progress Bar',
    VISIBILITY = 'Visibility',
    SAMPLE_APP = 'Sample App',
    MOUSE_OVER = 'Mouse Over',
    NON_BREAKING_SPACE = 'Non-Breaking Space',
    OVERLAPPED_ELEMENT = 'Overlapped Element',
    SHADOW_DOM = 'Shadow DOM',
    ALERTS = 'Alerts',
    FILE_UPLOAD = 'File Upload',
    ANIMATED_BUTTON = 'Animated Button',
    DISABLED_INPUT = 'Disabled Input',
    AUTO_WAIT = 'Auto Wait',
    FRAMES = 'Frames',
    GEO_LOCATION = 'Geo Location',
    CLEAR_INPUT = 'Clear Input',
    SCROLL_TO_CLICK = 'Scroll to Click',
    CSS_SELECTORS = 'CSS Selectors',
    SELECT = 'Select',
}

export class HomePage extends BasePage {
    path = '/'


    async verifyLink(link: HomePageLinks) {
        const heading = link === HomePageLinks.LOAD_DELAY ? 'Load Delays' : link
        await this.actions.clickElement({ elementName: link, elementRole: 'link' })
        await this.actions.validateTextInElement({ elementName: heading, elementRole: 'heading', expectedText: heading })
    }
    
}