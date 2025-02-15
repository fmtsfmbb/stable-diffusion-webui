// Core components
var TAC_CFG = null;
var tagBasePath = "";
var modelKeywordPath = "";
var tacSelfTrigger = false;

// Tag completion data loaded from files
var allTags = [];
var translations = new Map();
var extras = [];
// Same for tag-likes
var wildcardFiles = [];
var wildcardExtFiles = [];
var yamlWildcards = [];
var umiWildcards = [];
var embeddings = [];
var hypernetworks = [];
var loras = [];
var lycos = [];
var modelKeywordDict = new Map();
var chants = [];
var styleNames = [];

// Selected model info for black/whitelisting
var currentModelHash = "";
var currentModelName = "";

// Current results
var results = [];
var resultCount = 0;

// Relevant for parsing
var previousTags = [];
var tagword = "";
var originalTagword = "";
let hideBlocked = false;

// Tag selection for keyboard navigation
var selectedTag = null;
var oldSelectedTag = null;
var resultCountBeforeNormalTags = 0;

// Lora keyword undo/redo history
var textBeforeKeywordInsertion = "";
var textAfterKeywordInsertion = "";
var lastEditWasKeywordInsertion = false;
var keywordInsertionUndone = false;

// UMI
var umiPreviousTags = [];

/// Extendability system:
/// Provides "queues" for other files of the script (or really any js)
/// to add functions to be called at certain points in the script.
/// Similar to a callback system, but primitive.

// Queues
const QUEUE_AFTER_INSERT = [];
const QUEUE_AFTER_SETUP = [];
const QUEUE_FILE_LOAD = [];
const QUEUE_AFTER_CONFIG_CHANGE = [];
const QUEUE_SANITIZE = [];

// List of parsers to try
const PARSERS = [];