
declare var CKAccountChangedNotification: string;

declare const enum CKAccountStatus {

	CouldNotDetermine = 0,

	Available = 1,

	Restricted = 2,

	NoAccount = 3
}

declare const enum CKApplicationPermissionStatus {

	InitialState = 0,

	CouldNotComplete = 1,

	Denied = 2,

	Granted = 3
}

declare const enum CKApplicationPermissions {

	UserDiscoverability = 1
}

declare class CKAsset extends NSObject implements CKRecordValue {

	static alloc(): CKAsset; // inherited from NSObject

	static new(): CKAsset; // inherited from NSObject

	/* readonly */ fileURL: NSURL;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */  // inherited from NSObjectProtocol

	constructor(o: { fileURL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFileURL(fileURL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class CKContainer extends NSObject {

	static alloc(): CKContainer; // inherited from NSObject

	static containerWithIdentifier(containerIdentifier: string): CKContainer;

	static defaultContainer(): CKContainer;

	static new(): CKContainer; // inherited from NSObject

	/* readonly */ containerIdentifier: string;

	/* readonly */ privateCloudDatabase: CKDatabase;

	/* readonly */ publicCloudDatabase: CKDatabase;

	accountStatusWithCompletionHandler(completionHandler: (p1: CKAccountStatus, p2: NSError) => void): void;

	addOperation(operation: CKOperation): void;

	discoverAllContactUserInfosWithCompletionHandler(completionHandler: (p1: NSArray<CKDiscoveredUserInfo>, p2: NSError) => void): void;

	discoverUserInfoWithEmailAddressCompletionHandler(email: string, completionHandler: (p1: CKDiscoveredUserInfo, p2: NSError) => void): void;

	discoverUserInfoWithUserRecordIDCompletionHandler(userRecordID: CKRecordID, completionHandler: (p1: CKDiscoveredUserInfo, p2: NSError) => void): void;

	fetchAllLongLivedOperationIDsWithCompletionHandler(completionHandler: (p1: NSArray<string>, p2: NSError) => void): void;

	fetchLongLivedOperationWithIDCompletionHandler(operationID: string, completionHandler: (p1: CKOperation, p2: NSError) => void): void;

	fetchUserRecordIDWithCompletionHandler(completionHandler: (p1: CKRecordID, p2: NSError) => void): void;

	requestApplicationPermissionCompletionHandler(applicationPermission: CKApplicationPermissions, completionHandler: (p1: CKApplicationPermissionStatus, p2: NSError) => void): void;

	statusForApplicationPermissionCompletionHandler(applicationPermission: CKApplicationPermissions, completionHandler: (p1: CKApplicationPermissionStatus, p2: NSError) => void): void;
}

declare class CKDatabase extends NSObject {

	static alloc(): CKDatabase; // inherited from NSObject

	static new(): CKDatabase; // inherited from NSObject

	addOperation(operation: CKDatabaseOperation): void;

	deleteRecordWithIDCompletionHandler(recordID: CKRecordID, completionHandler: (p1: CKRecordID, p2: NSError) => void): void;

	deleteRecordZoneWithIDCompletionHandler(zoneID: CKRecordZoneID, completionHandler: (p1: CKRecordZoneID, p2: NSError) => void): void;

	deleteSubscriptionWithIDCompletionHandler(subscriptionID: string, completionHandler: (p1: string, p2: NSError) => void): void;

	fetchAllRecordZonesWithCompletionHandler(completionHandler: (p1: NSArray<CKRecordZone>, p2: NSError) => void): void;

	fetchAllSubscriptionsWithCompletionHandler(completionHandler: (p1: NSArray<CKSubscription>, p2: NSError) => void): void;

	fetchRecordWithIDCompletionHandler(recordID: CKRecordID, completionHandler: (p1: CKRecord, p2: NSError) => void): void;

	fetchRecordZoneWithIDCompletionHandler(zoneID: CKRecordZoneID, completionHandler: (p1: CKRecordZone, p2: NSError) => void): void;

	fetchSubscriptionWithIDCompletionHandler(subscriptionID: string, completionHandler: (p1: CKSubscription, p2: NSError) => void): void;

	performQueryInZoneWithIDCompletionHandler(query: CKQuery, zoneID: CKRecordZoneID, completionHandler: (p1: NSArray<CKRecord>, p2: NSError) => void): void;

	saveRecordCompletionHandler(record: CKRecord, completionHandler: (p1: CKRecord, p2: NSError) => void): void;

	saveRecordZoneCompletionHandler(zone: CKRecordZone, completionHandler: (p1: CKRecordZone, p2: NSError) => void): void;

	saveSubscriptionCompletionHandler(subscription: CKSubscription, completionHandler: (p1: CKSubscription, p2: NSError) => void): void;
}

declare class CKDatabaseOperation extends CKOperation {

	static alloc(): CKDatabaseOperation; // inherited from NSObject

	static new(): CKDatabaseOperation; // inherited from NSObject

	database: CKDatabase;
}

declare class CKDiscoverAllContactsOperation extends CKOperation {

	static alloc(): CKDiscoverAllContactsOperation; // inherited from NSObject

	static new(): CKDiscoverAllContactsOperation; // inherited from NSObject

	discoverAllContactsCompletionBlock: (p1: NSArray<CKDiscoveredUserInfo>, p2: NSError) => void;
}

declare class CKDiscoverUserInfosOperation extends CKOperation {

	static alloc(): CKDiscoverUserInfosOperation; // inherited from NSObject

	static new(): CKDiscoverUserInfosOperation; // inherited from NSObject

	discoverUserInfosCompletionBlock: (p1: NSDictionary<string, CKDiscoveredUserInfo>, p2: NSDictionary<CKRecordID, CKDiscoveredUserInfo>, p3: NSError) => void;

	emailAddresses: NSArray<string>;

	userRecordIDs: NSArray<CKRecordID>;

	constructor(o: { emailAddresses: NSArray<string>; userRecordIDs: NSArray<CKRecordID>; });

	initWithEmailAddressesUserRecordIDs(emailAddresses: NSArray<string>, userRecordIDs: NSArray<CKRecordID>): this;
}

declare class CKDiscoveredUserInfo extends NSObject {

	static alloc(): CKDiscoveredUserInfo; // inherited from NSObject

	static new(): CKDiscoveredUserInfo; // inherited from NSObject

	/* readonly */ displayContact: CNContact;

	/* readonly */ firstName: string;

	/* readonly */ lastName: string;

	/* readonly */ userRecordID: CKRecordID;
}

declare const enum CKErrorCode {

	InternalError = 1,

	PartialFailure = 2,

	NetworkUnavailable = 3,

	NetworkFailure = 4,

	BadContainer = 5,

	ServiceUnavailable = 6,

	RequestRateLimited = 7,

	MissingEntitlement = 8,

	NotAuthenticated = 9,

	PermissionFailure = 10,

	UnknownItem = 11,

	InvalidArguments = 12,

	ResultsTruncated = 13,

	ServerRecordChanged = 14,

	ServerRejectedRequest = 15,

	AssetFileNotFound = 16,

	AssetFileModified = 17,

	IncompatibleVersion = 18,

	ConstraintViolation = 19,

	OperationCancelled = 20,

	ChangeTokenExpired = 21,

	BatchRequestFailed = 22,

	ZoneBusy = 23,

	BadDatabase = 24,

	QuotaExceeded = 25,

	ZoneNotFound = 26,

	LimitExceeded = 27,

	UserDeletedZone = 28
}

declare var CKErrorDomain: string;

declare var CKErrorRetryAfterKey: string;

declare class CKFetchNotificationChangesOperation extends CKOperation {

	static alloc(): CKFetchNotificationChangesOperation; // inherited from NSObject

	static new(): CKFetchNotificationChangesOperation; // inherited from NSObject

	fetchNotificationChangesCompletionBlock: (p1: CKServerChangeToken, p2: NSError) => void;

	/* readonly */ moreComing: boolean;

	notificationChangedBlock: (p1: CKNotification) => void;

	previousServerChangeToken: CKServerChangeToken;

	resultsLimit: number;

	constructor(o: { previousServerChangeToken: CKServerChangeToken; });

	initWithPreviousServerChangeToken(previousServerChangeToken: CKServerChangeToken): this;
}

declare class CKFetchRecordChangesOperation extends CKDatabaseOperation {

	static alloc(): CKFetchRecordChangesOperation; // inherited from NSObject

	static new(): CKFetchRecordChangesOperation; // inherited from NSObject

	desiredKeys: NSArray<string>;

	fetchRecordChangesCompletionBlock: (p1: CKServerChangeToken, p2: NSData, p3: NSError) => void;

	/* readonly */ moreComing: boolean;

	previousServerChangeToken: CKServerChangeToken;

	recordChangedBlock: (p1: CKRecord) => void;

	recordWithIDWasDeletedBlock: (p1: CKRecordID) => void;

	recordZoneID: CKRecordZoneID;

	resultsLimit: number;

	constructor(o: { recordZoneID: CKRecordZoneID; previousServerChangeToken: CKServerChangeToken; });

	initWithRecordZoneIDPreviousServerChangeToken(recordZoneID: CKRecordZoneID, previousServerChangeToken: CKServerChangeToken): this;
}

declare class CKFetchRecordZonesOperation extends CKDatabaseOperation {

	static alloc(): CKFetchRecordZonesOperation; // inherited from NSObject

	static fetchAllRecordZonesOperation(): CKFetchRecordZonesOperation;

	static new(): CKFetchRecordZonesOperation; // inherited from NSObject

	fetchRecordZonesCompletionBlock: (p1: NSDictionary<CKRecordZoneID, CKRecordZone>, p2: NSError) => void;

	recordZoneIDs: NSArray<CKRecordZoneID>;

	constructor(o: { recordZoneIDs: NSArray<CKRecordZoneID>; });

	initWithRecordZoneIDs(zoneIDs: NSArray<CKRecordZoneID>): this;
}

declare class CKFetchRecordsOperation extends CKDatabaseOperation {

	static alloc(): CKFetchRecordsOperation; // inherited from NSObject

	static fetchCurrentUserRecordOperation(): CKFetchRecordsOperation;

	static new(): CKFetchRecordsOperation; // inherited from NSObject

	desiredKeys: NSArray<string>;

	fetchRecordsCompletionBlock: (p1: NSDictionary<CKRecordID, CKRecord>, p2: NSError) => void;

	perRecordCompletionBlock: (p1: CKRecord, p2: CKRecordID, p3: NSError) => void;

	perRecordProgressBlock: (p1: CKRecordID, p2: number) => void;

	recordIDs: NSArray<CKRecordID>;

	constructor(o: { recordIDs: NSArray<CKRecordID>; });

	initWithRecordIDs(recordIDs: NSArray<CKRecordID>): this;
}

declare class CKFetchSubscriptionsOperation extends CKDatabaseOperation {

	static alloc(): CKFetchSubscriptionsOperation; // inherited from NSObject

	static fetchAllSubscriptionsOperation(): CKFetchSubscriptionsOperation;

	static new(): CKFetchSubscriptionsOperation; // inherited from NSObject

	fetchSubscriptionCompletionBlock: (p1: NSDictionary<string, CKSubscription>, p2: NSError) => void;

	subscriptionIDs: NSArray<string>;

	constructor(o: { subscriptionIDs: NSArray<string>; });

	initWithSubscriptionIDs(subscriptionIDs: NSArray<string>): this;
}

declare class CKFetchWebAuthTokenOperation extends CKDatabaseOperation {

	static alloc(): CKFetchWebAuthTokenOperation; // inherited from NSObject

	static new(): CKFetchWebAuthTokenOperation; // inherited from NSObject

	APIToken: string;

	fetchWebAuthTokenCompletionBlock: (p1: string, p2: NSError) => void;

	constructor(o: { APIToken: string; });

	initWithAPIToken(APIToken: string): this;
}

declare class CKLocationSortDescriptor extends NSSortDescriptor implements NSSecureCoding {

	static alloc(): CKLocationSortDescriptor; // inherited from NSObject

	static new(): CKLocationSortDescriptor; // inherited from NSObject

	static sortDescriptorWithKeyAscending(key: string, ascending: boolean): CKLocationSortDescriptor; // inherited from NSSortDescriptor

	static sortDescriptorWithKeyAscendingComparator(key: string, ascending: boolean, cmptr: (p1: any, p2: any) => NSComparisonResult): CKLocationSortDescriptor; // inherited from NSSortDescriptor

	static sortDescriptorWithKeyAscendingSelector(key: string, ascending: boolean, selector: string): CKLocationSortDescriptor; // inherited from NSSortDescriptor

	static supportsSecureCoding(): boolean;

	/* readonly */ relativeLocation: CLLocation;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { key: string; relativeLocation: CLLocation; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithKeyRelativeLocation(key: string, relativeLocation: CLLocation): this;
}

declare class CKMarkNotificationsReadOperation extends CKOperation {

	static alloc(): CKMarkNotificationsReadOperation; // inherited from NSObject

	static new(): CKMarkNotificationsReadOperation; // inherited from NSObject

	markNotificationsReadCompletionBlock: (p1: NSArray<CKNotificationID>, p2: NSError) => void;

	notificationIDs: NSArray<CKNotificationID>;

	constructor(o: { notificationIDsToMarkRead: NSArray<CKNotificationID>; });

	initWithNotificationIDsToMarkRead(notificationIDs: NSArray<CKNotificationID>): this;
}

declare class CKModifyBadgeOperation extends CKOperation {

	static alloc(): CKModifyBadgeOperation; // inherited from NSObject

	static new(): CKModifyBadgeOperation; // inherited from NSObject

	badgeValue: number;

	modifyBadgeCompletionBlock: (p1: NSError) => void;

	constructor(o: { badgeValue: number; });

	initWithBadgeValue(badgeValue: number): this;
}

declare class CKModifyRecordZonesOperation extends CKDatabaseOperation {

	static alloc(): CKModifyRecordZonesOperation; // inherited from NSObject

	static new(): CKModifyRecordZonesOperation; // inherited from NSObject

	modifyRecordZonesCompletionBlock: (p1: NSArray<CKRecordZone>, p2: NSArray<CKRecordZoneID>, p3: NSError) => void;

	recordZoneIDsToDelete: NSArray<CKRecordZoneID>;

	recordZonesToSave: NSArray<CKRecordZone>;

	constructor(o: { recordZonesToSave: NSArray<CKRecordZone>; recordZoneIDsToDelete: NSArray<CKRecordZoneID>; });

	initWithRecordZonesToSaveRecordZoneIDsToDelete(recordZonesToSave: NSArray<CKRecordZone>, recordZoneIDsToDelete: NSArray<CKRecordZoneID>): this;
}

declare class CKModifyRecordsOperation extends CKDatabaseOperation {

	static alloc(): CKModifyRecordsOperation; // inherited from NSObject

	static new(): CKModifyRecordsOperation; // inherited from NSObject

	atomic: boolean;

	clientChangeTokenData: NSData;

	modifyRecordsCompletionBlock: (p1: NSArray<CKRecord>, p2: NSArray<CKRecordID>, p3: NSError) => void;

	perRecordCompletionBlock: (p1: CKRecord, p2: NSError) => void;

	perRecordProgressBlock: (p1: CKRecord, p2: number) => void;

	recordIDsToDelete: NSArray<CKRecordID>;

	recordsToSave: NSArray<CKRecord>;

	savePolicy: CKRecordSavePolicy;

	constructor(o: { recordsToSave: NSArray<CKRecord>; recordIDsToDelete: NSArray<CKRecordID>; });

	initWithRecordsToSaveRecordIDsToDelete(records: NSArray<CKRecord>, recordIDs: NSArray<CKRecordID>): this;
}

declare class CKModifySubscriptionsOperation extends CKDatabaseOperation {

	static alloc(): CKModifySubscriptionsOperation; // inherited from NSObject

	static new(): CKModifySubscriptionsOperation; // inherited from NSObject

	modifySubscriptionsCompletionBlock: (p1: NSArray<CKSubscription>, p2: NSArray<string>, p3: NSError) => void;

	subscriptionIDsToDelete: NSArray<string>;

	subscriptionsToSave: NSArray<CKSubscription>;

	constructor(o: { subscriptionsToSave: NSArray<CKSubscription>; subscriptionIDsToDelete: NSArray<string>; });

	initWithSubscriptionsToSaveSubscriptionIDsToDelete(subscriptionsToSave: NSArray<CKSubscription>, subscriptionIDsToDelete: NSArray<string>): this;
}

declare class CKNotification extends NSObject {

	static alloc(): CKNotification; // inherited from NSObject

	static new(): CKNotification; // inherited from NSObject

	static notificationFromRemoteNotificationDictionary(notificationDictionary: NSDictionary<string, NSObject>): CKNotification;

	/* readonly */ alertActionLocalizationKey: string;

	/* readonly */ alertBody: string;

	/* readonly */ alertLaunchImage: string;

	/* readonly */ alertLocalizationArgs: NSArray<string>;

	/* readonly */ alertLocalizationKey: string;

	/* readonly */ badge: number;

	/* readonly */ category: string;

	/* readonly */ containerIdentifier: string;

	/* readonly */ isPruned: boolean;

	/* readonly */ notificationID: CKNotificationID;

	/* readonly */ notificationType: CKNotificationType;

	/* readonly */ soundName: string;

	/* readonly */ subscriptionID: string;
}

declare class CKNotificationID extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKNotificationID; // inherited from NSObject

	static new(): CKNotificationID; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class CKNotificationInfo extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKNotificationInfo; // inherited from NSObject

	static new(): CKNotificationInfo; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	alertActionLocalizationKey: string;

	alertBody: string;

	alertLaunchImage: string;

	alertLocalizationArgs: NSArray<string>;

	alertLocalizationKey: string;

	category: string;

	desiredKeys: NSArray<string>;

	shouldBadge: boolean;

	shouldSendContentAvailable: boolean;

	soundName: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare const enum CKNotificationType {

	Query = 1,

	RecordZone = 2,

	ReadNotification = 3
}

declare class CKOperation extends NSOperation {

	static alloc(): CKOperation; // inherited from NSObject

	static new(): CKOperation; // inherited from NSObject

	allowsCellularAccess: boolean;

	container: CKContainer;

	longLived: boolean;

	longLivedOperationWasPersistedBlock: () => void;

	/* readonly */ operationID: string;

	usesBackgroundSession: boolean;
}

declare var CKOwnerDefaultName: string;

declare var CKPartialErrorsByItemIDKey: string;

declare class CKQuery extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKQuery; // inherited from NSObject

	static new(): CKQuery; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	/* readonly */ predicate: NSPredicate;

	/* readonly */ recordType: string;

	sortDescriptors: NSArray<NSSortDescriptor>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { recordType: string; predicate: NSPredicate; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithRecordTypePredicate(recordType: string, predicate: NSPredicate): this;
}

declare class CKQueryCursor extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKQueryCursor; // inherited from NSObject

	static new(): CKQueryCursor; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class CKQueryNotification extends CKNotification {

	static alloc(): CKQueryNotification; // inherited from NSObject

	static new(): CKQueryNotification; // inherited from NSObject

	static notificationFromRemoteNotificationDictionary(notificationDictionary: NSDictionary<string, NSObject>): CKQueryNotification; // inherited from CKNotification

	/* readonly */ isPublicDatabase: boolean;

	/* readonly */ queryNotificationReason: CKQueryNotificationReason;

	/* readonly */ recordFields: NSDictionary<string, CKRecordValue>;

	/* readonly */ recordID: CKRecordID;
}

declare const enum CKQueryNotificationReason {

	RecordCreated = 1,

	RecordUpdated = 2,

	RecordDeleted = 3
}

declare class CKQueryOperation extends CKDatabaseOperation {

	static alloc(): CKQueryOperation; // inherited from NSObject

	static new(): CKQueryOperation; // inherited from NSObject

	cursor: CKQueryCursor;

	desiredKeys: NSArray<string>;

	query: CKQuery;

	queryCompletionBlock: (p1: CKQueryCursor, p2: NSError) => void;

	recordFetchedBlock: (p1: CKRecord) => void;

	resultsLimit: number;

	zoneID: CKRecordZoneID;

	constructor(o: { cursor: CKQueryCursor; });

	constructor(o: { query: CKQuery; });

	initWithCursor(cursor: CKQueryCursor): this;

	initWithQuery(query: CKQuery): this;
}

declare var CKQueryOperationMaximumResults: number;

declare class CKRecord extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKRecord; // inherited from NSObject

	static new(): CKRecord; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	/* readonly */ creationDate: Date;

	/* readonly */ creatorUserRecordID: CKRecordID;

	/* readonly */ lastModifiedUserRecordID: CKRecordID;

	/* readonly */ modificationDate: Date;

	/* readonly */ recordChangeTag: string;

	/* readonly */ recordID: CKRecordID;

	/* readonly */ recordType: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { recordType: string; });

	constructor(o: { recordType: string; recordID: CKRecordID; });

	constructor(o: { recordType: string; zoneID: CKRecordZoneID; });

	allKeys(): NSArray<string>;

	allTokens(): NSArray<string>;

	changedKeys(): NSArray<string>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeSystemFieldsWithCoder(coder: NSCoder): void;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithRecordType(recordType: string): this;

	initWithRecordTypeRecordID(recordType: string, recordID: CKRecordID): this;

	initWithRecordTypeZoneID(recordType: string, zoneID: CKRecordZoneID): this;

	objectForKey(key: string): CKRecordValue;

	objectForKeyedSubscript(key: string): CKRecordValue;

	setObjectForKey(object: CKRecordValue, key: string): void;

	setObjectForKeyedSubscript(object: CKRecordValue, key: string): void;
}

declare var CKRecordChangedErrorAncestorRecordKey: string;

declare var CKRecordChangedErrorClientRecordKey: string;

declare var CKRecordChangedErrorServerRecordKey: string;

declare class CKRecordID extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKRecordID; // inherited from NSObject

	static new(): CKRecordID; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	/* readonly */ recordName: string;

	/* readonly */ zoneID: CKRecordZoneID;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { recordName: string; });

	constructor(o: { recordName: string; zoneID: CKRecordZoneID; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithRecordName(recordName: string): this;

	initWithRecordNameZoneID(recordName: string, zoneID: CKRecordZoneID): this;
}

declare const enum CKRecordSavePolicy {

	IfServerRecordUnchanged = 0,

	ChangedKeys = 1,

	AllKeys = 2
}

declare var CKRecordTypeUserRecord: string;

interface CKRecordValue extends NSObjectProtocol {
}
declare var CKRecordValue: {

	prototype: CKRecordValue;
};

declare class CKRecordZone extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKRecordZone; // inherited from NSObject

	static defaultRecordZone(): CKRecordZone;

	static new(): CKRecordZone; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	/* readonly */ capabilities: CKRecordZoneCapabilities;

	/* readonly */ zoneID: CKRecordZoneID;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { zoneID: CKRecordZoneID; });

	constructor(o: { zoneName: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithZoneID(zoneID: CKRecordZoneID): this;

	initWithZoneName(zoneName: string): this;
}

declare const enum CKRecordZoneCapabilities {

	CapabilityFetchChanges = 1,

	CapabilityAtomic = 2
}

declare var CKRecordZoneDefaultName: string;

declare class CKRecordZoneID extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKRecordZoneID; // inherited from NSObject

	static new(): CKRecordZoneID; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	/* readonly */ ownerName: string;

	/* readonly */ zoneName: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { zoneName: string; ownerName: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithZoneNameOwnerName(zoneName: string, ownerName: string): this;
}

declare class CKRecordZoneNotification extends CKNotification {

	static alloc(): CKRecordZoneNotification; // inherited from NSObject

	static new(): CKRecordZoneNotification; // inherited from NSObject

	static notificationFromRemoteNotificationDictionary(notificationDictionary: NSDictionary<string, NSObject>): CKRecordZoneNotification; // inherited from CKNotification

	/* readonly */ recordZoneID: CKRecordZoneID;
}

declare class CKReference extends NSObject implements CKRecordValue, NSCopying, NSSecureCoding {

	static alloc(): CKReference; // inherited from NSObject

	static new(): CKReference; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	/* readonly */ recordID: CKRecordID;

	/* readonly */ referenceAction: CKReferenceAction;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { record: CKRecord; action: CKReferenceAction; });

	constructor(o: { recordID: CKRecordID; action: CKReferenceAction; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithRecordAction(record: CKRecord, action: CKReferenceAction): this;

	initWithRecordIDAction(recordID: CKRecordID, action: CKReferenceAction): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum CKReferenceAction {

	None = 0,

	DeleteSelf = 1
}

declare class CKServerChangeToken extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKServerChangeToken; // inherited from NSObject

	static new(): CKServerChangeToken; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class CKSubscription extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CKSubscription; // inherited from NSObject

	static new(): CKSubscription; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	notificationInfo: CKNotificationInfo;

	/* readonly */ predicate: NSPredicate;

	/* readonly */ recordType: string;

	/* readonly */ subscriptionID: string;

	/* readonly */ subscriptionOptions: CKSubscriptionOptions;

	/* readonly */ subscriptionType: CKSubscriptionType;

	zoneID: CKRecordZoneID;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { recordType: string; predicate: NSPredicate; options: CKSubscriptionOptions; });

	constructor(o: { recordType: string; predicate: NSPredicate; subscriptionID: string; options: CKSubscriptionOptions; });

	constructor(o: { zoneID: CKRecordZoneID; options: CKSubscriptionOptions; });

	constructor(o: { zoneID: CKRecordZoneID; subscriptionID: string; options: CKSubscriptionOptions; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithRecordTypePredicateOptions(recordType: string, predicate: NSPredicate, subscriptionOptions: CKSubscriptionOptions): this;

	initWithRecordTypePredicateSubscriptionIDOptions(recordType: string, predicate: NSPredicate, subscriptionID: string, subscriptionOptions: CKSubscriptionOptions): this;

	initWithZoneIDOptions(zoneID: CKRecordZoneID, subscriptionOptions: CKSubscriptionOptions): this;

	initWithZoneIDSubscriptionIDOptions(zoneID: CKRecordZoneID, subscriptionID: string, subscriptionOptions: CKSubscriptionOptions): this;
}

declare const enum CKSubscriptionOptions {

	FiresOnRecordCreation = 1,

	FiresOnRecordUpdate = 2,

	FiresOnRecordDeletion = 4,

	FiresOnce = 8
}

declare const enum CKSubscriptionType {

	Query = 1,

	RecordZone = 2
}
