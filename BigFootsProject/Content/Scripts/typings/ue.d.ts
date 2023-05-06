/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
/// <reference path="_part_3_ue.d.ts">/>
/// <reference path="_part_4_ue.d.ts">/>
declare class JavascriptLogSubscriber extends UObject { 
	OnNewLogMessage: UnrealEngineMulticastDelegate<(Message: string, Type: string, Category: string) => void>;
	static Load(ResourceName: string): JavascriptLogSubscriber;
	static Find(Outer: UObject, ResourceName: string): JavascriptLogSubscriber;
	static GetDefaultObject(): JavascriptLogSubscriber;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLogSubscriber;
	static C(Other: UObject | any): JavascriptLogSubscriber;
}

declare class JavascriptMenuLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
	static GenericCommand(What: string): JavascriptUICommandInfo;
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static Destroy(Context: JavascriptBindingContext): void;
	static CreateUICommandList(): JavascriptUICommandList;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(ID: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static GetDefaultObject(): JavascriptMultiBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMultiBox;
}

declare type EJSCheckBoxState = 'Unchecked' | 'Checked' | 'Undetermined' | 'EJSCheckBoxState_MAX';
declare var EJSCheckBoxState : { Unchecked:'Unchecked',Checked:'Checked',Undetermined:'Undetermined',EJSCheckBoxState_MAX:'EJSCheckBoxState_MAX', };
declare class JavascriptNotification extends UObject { 
	text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: EJSCheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static GetDefaultObject(): JavascriptNotification;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	SetText(InText: string): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject | any): JavascriptNotification;
}

declare class JavascriptOnEditorCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptOnEditorCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptOnEditorCommandlet;
	static GetDefaultObject(): JavascriptOnEditorCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOnEditorCommandlet;
	GetEngine(): EditorEngine;
	static C(Other: UObject | any): JavascriptOnEditorCommandlet;
}

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success' | 'EPropertyAccessResult_MAX';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success',EPropertyAccessResult_MAX:'EPropertyAccessResult_MAX', };
declare class JavascriptSimpleDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => void>;
	static Load(ResourceName: string): JavascriptSimpleDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleDelegateWrapper;
}

declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject | any): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GeneratePathToProperty(): string;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetIndexInArray(): number;
	GetJavascriptRefValue(OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	GetKeyHandle(): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetObjectValue(OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	GetOuterObjects(): UObject[];
	GetParentHandle(): JavascriptPropertyHandle;
	GetProperty(): any;
	GetPropertyName(): string;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	IsArrayProperty(): boolean;
	IsArrayPropertyWithValueType(): boolean;
	IsEditConst(): boolean;
	IsValidHandle(): boolean;
	SetJavascriptRefValue(InValue: JavascriptRef): EPropertyAccessResult;
	SetObjectValue(InValue: UObject): EPropertyAccessResult;
	SetOnPropertyValueChanged(Wrapper: JavascriptSimpleDelegateWrapper): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetPropertyName(Handle: JavascriptPropertyHandle): string;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Wrapper: JavascriptSimpleDelegateWrapper): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject | any): JavascriptDetailWidgetDecl;
	SetContent(Widget: JavascriptSlateWidget): void;
	SetHAlign(InAlignment: EHorizontalAlignment): void;
	SetMaxDesiredWidth(MaxWidth: number): void;
	SetMinDesiredWidth(MinWidth: number): void;
	SetVAlign(InAlignment: EVerticalAlignment): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
}

declare class JavascriptDetailWidgetRow { 
	clone() : JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject | any): JavascriptPropertyTypeCustomizationUtils;
	RequestRefresh(bForce: boolean): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
}

declare class JavascriptSimpleGetBoolDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleGetBoolDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleGetBoolDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleGetBoolDelegateWrapper;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject | any): JavascriptDetailPropertyRow;
	BindVisibility(Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	AddExternalObjectProperty(Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	AddExternalObjects(Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(ID: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnPropertyValueChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptPropertyCustomization;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Wrapper: JavascriptSimpleDelegateWrapper): void;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetPropertyName(Handle: JavascriptPropertyHandle): string;
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
}

declare type EPropertyEditorNameAreaSettings = 'HideNameArea' | 'ObjectsUseNameArea' | 'ActorsUseNameArea' | 'ComponentsAndActorsUseNameArea' | 'EPropertyEditorNameAreaSettings_MAX';
declare var EPropertyEditorNameAreaSettings : { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea',EPropertyEditorNameAreaSettings_MAX:'EPropertyEditorNameAreaSettings_MAX', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(PropertyName: string, MemberPropertyName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	bReadOnly: boolean;
	bEnablePropertyPath: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	ReadOnlyDelegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static GetDefaultObject(): PropertyEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	IsPropertyVisible(PropertName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	IsPropertyReadOnly(PropertyName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	ForceRefresh(): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare class JavascriptPropertyTable extends Widget { 
	OnGenerateCustomCellWidget: UnrealEngineDelegate<(UObject: UObject, ColumnName: string) => JavascriptSlateWidget>;
	OnUseCustomCellWidget: UnrealEngineDelegate<(UObject: UObject, ColumnName: string) => boolean>;
	bUseCustomColumns: boolean;
	static Load(ResourceName: string): JavascriptPropertyTable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyTable;
	static GetDefaultObject(): JavascriptPropertyTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyTable;
	SetEditingObjects(InEditingObjects: UObject[]): void;
	GetSelectedTableObjects(): UObject[];
	GetEditingObjects(): UObject[];
	static C(Other: UObject | any): JavascriptPropertyTable;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static GetPhysicsBodySetupFromStaticMeshComponent(InStaticMeshComp: StaticMeshComponent): BodySetup;
	static GetPhysicsBodySetupFromStaticMesh(InStaticMesh: StaticMesh): BodySetup;
	static GetPhysicsBodySetupFromMesh(InSkeletalMesh: SkeletalMesh,InName: string): BodySetup;
	static GetPhysicsBodySetup(InSkeletalMeshComp: SkeletalMeshComponent,InName: string): BodySetup;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject | any): JavascriptRawMeshLibrary;
}

declare class JavascriptScrubControlPanel extends Widget { 
	OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() => void>;
	SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptScrubControlPanel;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel;
	static GetDefaultObject(): JavascriptScrubControlPanel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel;
	SetViewRange(NewMin: number,NewMax: number): void;
	SetSumFrames(NewSumFrames: number): void;
	SetPlaybackPosition(NewTime: number): void;
	SetLooping(NewbLooping: boolean): void;
	SetFramesPerSecond(NewFramesPerSecond: number): void;
	IsLooping(): boolean;
	GetViewRangeMin(): number;
	GetViewRangeMax(): number;
	GetTotalSequenceLength(): number;
	GetTotalFrameCount(): any;
	GetPlaybackPosition(): number;
	GetFramesPerSecond(): number;
	static C(Other: UObject | any): JavascriptScrubControlPanel;
}

declare class JavascriptWebBrowser extends Widget { 
	OnUrlChanged: UnrealEngineMulticastDelegate<(text: string) => void>;
	OnBeforePopup: UnrealEngineMulticastDelegate<(URL: string, Frame: string) => void>;
	bShowAddressBar: boolean;
	bShowControls: boolean;
	bSupportsThumbMouseButtonNavigation: boolean;
	static Load(ResourceName: string): JavascriptWebBrowser;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser;
	static GetDefaultObject(): JavascriptWebBrowser;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser;
	LoadURL(NewURL: string): void;
	LoadString(Contents: string,DummyURL: string): void;
	GetUrl(): string;
	GetTitleText(): string;
	ExecuteJavascript(ScriptText: string): void;
	static C(Other: UObject | any): JavascriptWebBrowser;
}

declare class JavascriptPinParams { 
	ContainerType: EPinContainerType;
	bIsReference: boolean;
	bIsConst: boolean;
	index: number;
	clone() : JavascriptPinParams;
	static C(Other: UObject | any): JavascriptPinParams;
}

declare class JavascriptGraphEdNode extends EdGraphNode { 
	BackgroundColor: SlateColor;
	GraphNode: UObject;
	IsTitleOnly: boolean;
	IsCustomNode: boolean;
	WidgetFinalized: JavascriptFunction;
	RenderOpacity: number;
	Bidirectional: boolean;
	PriorityOrder: number;
	PinRefMap: any;
	static Load(ResourceName: string): JavascriptGraphEdNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
	static GetDefaultObject(): JavascriptGraphEdNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode;
	UpdateSlate(): void;
	SetVisible(bVisible: boolean): void;
	SetTitleSelectionMode(InTitleHeight: number): void;
	SetRenderOpacity(Opacity: number): void;
	SetEnable(bEnable: boolean): void;
	ResetTitleSelectionMode(): void;
	RemovePinByName(PinName: string): boolean;
	RemovePin(Pin: JavascriptEdGraphPin): boolean;
	GetVisible(): boolean;
	GetNumOfPins(Direction: EEdGraphPinDirection): number;
	GetDesiredSize(): Vector2D;
	CreatePin(Dir: EEdGraphPinDirection,PinCategory: string,PinSubCategory: string,PinSubCategoryObject: UObject,PinName: string,PinToolTip: string,PinDisplayName: string,InPinParams: JavascriptPinParams): JavascriptEdGraphPin;
	static C(Other: UObject | any): JavascriptGraphEdNode;
	GetOwnerPanel(): JavascriptSlateWidget;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
}

declare class JavascriptSlateEdNode { 
	clone() : JavascriptSlateEdNode;
	static C(Other: UObject | any): JavascriptSlateEdNode;
	AddPinToHoverSet(Pin: JavascriptEdGraphPin): void;
	RemovePinFromHoverSet(Pin: JavascriptEdGraphPin): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
}

declare class JavascriptPerformSecondPassLayoutContainer { 
	PrevNode: EdGraphNode;
	NextNode: EdGraphNode;
	NodeIndex: number;
	MaxNodes: number;
	clone() : JavascriptPerformSecondPassLayoutContainer;
	static C(Other: UObject | any): JavascriptPerformSecondPassLayoutContainer;
}

declare class JavascriptConnectionParams { 
	WireColor: LinearColor;
	AssociatedPin1: JavascriptEdGraphPin;
	AssociatedPin2: JavascriptEdGraphPin;
	WireThickness: number;
	bDrawBubbles: boolean;
	bUserFlag1: boolean;
	bUserFlag2: boolean;
	StartDirection: EEdGraphPinDirection;
	EndDirection: EEdGraphPinDirection;
	clone() : JavascriptConnectionParams;
	static C(Other: UObject | any): JavascriptConnectionParams;
}

declare class JavascriptGraphConnectionDrawingPolicyContainer { 
	clone() : JavascriptGraphConnectionDrawingPolicyContainer;
	static C(Other: UObject | any): JavascriptGraphConnectionDrawingPolicyContainer;
	ApplyHoverDeemphasis(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	DetermineWiringStyle(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	DrawConnection(A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	DrawSplineWithArrow(StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	GetHorveredPinNum(): number;
	IsContainedHoveredPins(Pin: JavascriptEdGraphPin): boolean;
	MakeRotatedBox(ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
}

declare type EGraphSchemaGetStringQuery = 'Description' | 'Title' | 'EGraphSchemaGetStringQuery_MAX';
declare var EGraphSchemaGetStringQuery : { Description:'Description',Title:'Title',EGraphSchemaGetStringQuery_MAX:'EGraphSchemaGetStringQuery_MAX', };
declare class JavascriptGraphMenuBuilder extends JavascriptMenuBuilder { 
	Graph: EdGraph;
	GraphNode: EdGraphNode;
	GraphPin: JavascriptEdGraphPin;
	bIsDebugging: boolean;
	clone() : JavascriptGraphMenuBuilder;
	static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}

declare type ECanCreateConnectionResponse = 'CONNECT_RESPONSE_MAKE' | 'CONNECT_RESPONSE_DISALLOW' | 'CONNECT_RESPONSE_BREAK_OTHERS_A' | 'CONNECT_RESPONSE_BREAK_OTHERS_B' | 'CONNECT_RESPONSE_BREAK_OTHERS_AB' | 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE' | 'CONNECT_RESPONSE_MAKE_WITH_PROMOTION' | 'CONNECT_RESPONSE_MAX';
declare var ECanCreateConnectionResponse : { CONNECT_RESPONSE_MAKE:'CONNECT_RESPONSE_MAKE',CONNECT_RESPONSE_DISALLOW:'CONNECT_RESPONSE_DISALLOW',CONNECT_RESPONSE_BREAK_OTHERS_A:'CONNECT_RESPONSE_BREAK_OTHERS_A',CONNECT_RESPONSE_BREAK_OTHERS_B:'CONNECT_RESPONSE_BREAK_OTHERS_B',CONNECT_RESPONSE_BREAK_OTHERS_AB:'CONNECT_RESPONSE_BREAK_OTHERS_AB',CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE:'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE',CONNECT_RESPONSE_MAKE_WITH_PROMOTION:'CONNECT_RESPONSE_MAKE_WITH_PROMOTION',CONNECT_RESPONSE_MAX:'CONNECT_RESPONSE_MAX', };
declare class JavascriptPinConnectionResponse { 
	Message: string;
	Response: ECanCreateConnectionResponse;
	clone() : JavascriptPinConnectionResponse;
	static C(Other: UObject | any): JavascriptPinConnectionResponse;
}

declare class EdGraphSchemaAction { 
	MenuDescription: string;
	TooltipDescription: string;
	Category: string;
	Keywords: string;
	Grouping: number;
	SectionID: number;
	MenuDescriptionArray: string[];
	FullSearchTitlesArray: string[];
	FullSearchKeywordsArray: string[];
	FullSearchCategoryArray: string[];
	LocalizedMenuDescriptionArray: string[];
	LocalizedFullSearchTitlesArray: string[];
	LocalizedFullSearchKeywordsArray: string[];
	LocalizedFullSearchCategoryArray: string[];
	SearchText: string;
	clone() : EdGraphSchemaAction;
	static C(Other: UObject | any): EdGraphSchemaAction;
}

declare class PerformActionContext { 
	ParentGraph: EdGraph;
	FromPins: JavascriptEdGraphPin[];
	Location: Vector2D;
	bSelectNewNode: boolean;
	clone() : PerformActionContext;
	static C(Other: UObject | any): PerformActionContext;
}

declare class JavascriptArrangedWidget { 
	clone() : JavascriptArrangedWidget;
	static C(Other: UObject | any): JavascriptArrangedWidget;
}

declare class JavascriptPinWidget { 
	clone() : JavascriptPinWidget;
	static C(Other: UObject | any): JavascriptPinWidget;
}

declare class JavascriptDetermineLinkGeometryContainer { 
	clone() : JavascriptDetermineLinkGeometryContainer;
	static C(Other: UObject | any): JavascriptDetermineLinkGeometryContainer;
	FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget;
	GetOutputPinWidget(): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
}

declare class JavascriptGraphAssetGraphSchema extends EdGraphSchema { 
	OnGetPinColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetPinTextColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => string>;
	OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => void>;
	OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void>;
	OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: boolean, MouseZone: number, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptPerformSecondPassLayoutContainer>;
	OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean>;
	OnTakeContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget) => JavascriptSlateWidget>;
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEnablePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetCustomPinBoxWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeUserWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeTitleAreaWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: EGraphSchemaGetStringQuery) => string>;
	OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) => void>;
	OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnCanCreateConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => JavascriptPinConnectionResponse>;
	OnPerformAction: UnrealEngineDelegate<(Action: EdGraphSchemaAction, Context: PerformActionContext) => EdGraphNode>;
	OnContextActions: UnrealEngineDelegate<(FromPin: JavascriptEdGraphPin) => EdGraphSchemaAction[]>;
	OnNodeConnectionListChanged: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => boolean>;
	OnDetermineLinkGeometry: UnrealEngineDelegate<(OutPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, StartWidgetGeometry: JavascriptArrangedWidget, EndWidgetGeometry: JavascriptArrangedWidget, Container: JavascriptDetermineLinkGeometryContainer) => boolean>;
	OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() => boolean>;
	OnDragEnter: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDragLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnDragOver: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDrop: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnGetSideMarginInPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => number>;
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema;
	BreakSinglePinLink(SourcePin: JavascriptEdGraphPin,TargetPin: JavascriptEdGraphPin): void;
	BreakPinLinks(TargetPin: JavascriptEdGraphPin,bSendsNodeNotifcation: boolean): void;
	BreakNodeLinks(TargetNode: EdGraphNode): void;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}

declare class JavascriptGraphEdCustomNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdCustomNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdCustomNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	SetGraphPanel(InGraphPanel: JavascriptSlateWidget): void;
	static C(Other: UObject | any): JavascriptGraphEdCustomNodeWidget;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	CustomNodes: JavascriptGraphEdNode[];
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	CommentNodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	CustomNodeCreator(): JavascriptNodeCreator;
	NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	static CommentNodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
}

declare class JavascriptGraphEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptGraphEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorLibrary;
	static GetDefaultObject(): JavascriptGraphEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorLibrary;
	static TryConnection(Schema: EdGraphSchema,A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): boolean;
	static SetPinType(Pin: JavascriptEdGraphPin,PinType: EdGraphPinType): void;
	static SetPinRefObject(InPin: JavascriptEdGraphPin,InObject: UObject): void;
	static SetPinInfo(A: JavascriptEdGraphPin,InPinName: string,InPinToolTip: string): void;
	static SetPinHidden(A: JavascriptEdGraphPin,bHidden: boolean): void;
	static SetPinContainerType(A: JavascriptEdGraphPin,ContainerType: EJavascriptPinContainerType): void;
	static SetPinAdvancedView(A: JavascriptEdGraphPin,bAdvancedView: boolean): void;
	static SetParentPin(A: JavascriptEdGraphPin,Parent: JavascriptEdGraphPin): void;
	static SetNodeMetaData(Schema: EdGraphSchema,UNode: EdGraphNode,KeyValue: string): boolean;
	static ResizeNode(UNode: EdGraphNode,NewSize: Vector2D): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static MakeLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static IsValid(A: JavascriptEdGraphPin): boolean;
	static IsPinHidden(A: JavascriptEdGraphPin): boolean;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static GetSubPins(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
	static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
	static GetPinRefObject(InPin: JavascriptEdGraphPin): UObject;
	static GetPinName(A: JavascriptEdGraphPin): string;
	static GetPinIndex(A: JavascriptEdGraphPin): number;
	static GetPinGUID(A: JavascriptEdGraphPin): Guid;
	static GetPinContainerType(A: JavascriptEdGraphPin): EJavascriptPinContainerType;
	static GetParentPin(A: JavascriptEdGraphPin): JavascriptEdGraphPin;
	static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
	static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetLinkedPinNum(A: JavascriptEdGraphPin): number;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static GetDirection(A: JavascriptEdGraphPin): EEdGraphPinDirection;
	static GetDefaultObject(): JavascriptEdGraphPin;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPin(UNode: EdGraphNode,PinName: string,Direction: EEdGraphPinDirection): JavascriptEdGraphPin;
	static FindClosestPointOnGeom(Geom: Geometry,TestPoint: Vector2D): Vector2D;
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DestroyNode(UNode: EdGraphNode): void;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static CommentNodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static CenterOf(Geom: Geometry): Vector2D;
	static CanUserDeleteNode(UNode: EdGraphNode): boolean;
	static CanDuplicateNode(UNode: EdGraphNode): boolean;
	static BreakLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static BreakAllPinLinks(A: JavascriptEdGraphPin): void;
	static AutowireNewNode(UNode: EdGraphNode,FromPin: JavascriptEdGraphPin): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static C(Other: UObject | any): JavascriptGraphEditorLibrary;
}

declare class JavascriptGraphAppearanceInfo { 
	CornerImage: SlateBrush;
	CornerText: string;
	PIENotifyText: string;
	ReadOnlyText: string;
	InstructionText: string;
	clone() : JavascriptGraphAppearanceInfo;
	static C(Other: UObject | any): JavascriptGraphAppearanceInfo;
}

declare type EPinVisibility = 'Pin_Show' | 'Pin_HideNoConnection' | 'Pin_HideNoConnectionNoDefault' | 'Pin_MAX';
declare var EPinVisibility : { Pin_Show:'Pin_Show',Pin_HideNoConnection:'Pin_HideNoConnection',Pin_HideNoConnectionNoDefault:'Pin_HideNoConnectionNoDefault',Pin_MAX:'Pin_MAX', };
declare class JavascriptGraphEditorWidget extends Widget { 
	EdGraph: JavascriptGraphEdGraph;
	OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
	OnDropActor: UnrealEngineDelegate<(Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void>;
	OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void>;
	OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
	OnInitialGraphPanelUpdated: UnrealEngineDelegate<() => void>;
	AppearanceInfo: JavascriptGraphAppearanceInfo;
	CommandList: JavascriptUICommandList;
	static Load(ResourceName: string): JavascriptGraphEditorWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget;
	static GetDefaultObject(): JavascriptGraphEditorWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget;
	SetViewLocation(Location: Vector2D,ZoomAmount: number): void;
	SetPinVisibility(InVisibility: EPinVisibility): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	NotifyGraphChanged(): void;
	static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
	JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
	JumpToNode(JumpToMe: EdGraphNode,bRequestRename: boolean,bSelectNode: boolean): void;
	GetViewLocation(OutLocation?: Vector2D,OutZoomAmount?: number): {OutLocation: Vector2D, OutZoomAmount: number};
	GetSelectedNodes(): UObject[];
	GetPasteLocation(): Vector2D;
	ClearSelectionSet(): void;
	static C(Other: UObject | any): JavascriptGraphEditorWidget;
}

declare class JavascriptGraphEdNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	static C(Other: UObject | any): JavascriptGraphEdNodeWidget;
}

declare class JavascriptGraphEdNode_Comment extends JavascriptGraphEdNode { 
	CommentColor: LinearColor;
	FontSize: number;
	bCommentBubbleVisible_InDetailsPanel: boolean;
	bColorCommentBubble: boolean;
	MoveMode: ECommentBoxMode;
	CommentDepth: number;
	static Load(ResourceName: string): JavascriptGraphEdNode_Comment;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode_Comment;
	static GetDefaultObject(): JavascriptGraphEdNode_Comment;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode_Comment;
	static C(Other: UObject | any): JavascriptGraphEdNode_Comment;
}

declare class JavascriptGraphTextPropertyEditableTextBox extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => JavascriptTextProperty>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(TextProperty: JavascriptTextProperty) => void>;
	WidgetStyle: EditableTextBoxStyle;
	WrapTextAt: number;
	AutoWrapText: boolean;
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox;
}

declare class OnGetGraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetGraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetGraphPin__PythonCallable;
	static GetDefaultObject(): OnGetGraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetGraphPin__PythonCallable;
	static C(Other: UObject | any): OnGetGraphPin__PythonCallable;
}

declare class OnDisallowedPinConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDisallowedPinConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDisallowedPinConnection__PythonCallable;
	static GetDefaultObject(): OnDisallowedPinConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDisallowedPinConnection__PythonCallable;
	static C(Other: UObject | any): OnDisallowedPinConnection__PythonCallable;
}

declare class OnDropActor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDropActor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDropActor__PythonCallable;
	static GetDefaultObject(): OnDropActor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDropActor__PythonCallable;
	static C(Other: UObject | any): OnDropActor__PythonCallable;
}

declare class SetNodes__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SetNodes__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SetNodes__PythonCallable;
	static GetDefaultObject(): SetNodes__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetNodes__PythonCallable;
	static C(Other: UObject | any): SetNodes__PythonCallable;
}

declare class SimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SimpleDelegate__PythonCallable;
	static GetDefaultObject(): SimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleDelegate__PythonCallable;
	static C(Other: UObject | any): SimpleDelegate__PythonCallable;
}

declare class SingleNode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SingleNode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SingleNode__PythonCallable;
	static GetDefaultObject(): SingleNode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SingleNode__PythonCallable;
	static C(Other: UObject | any): SingleNode__PythonCallable;
}

declare class OnBuildMenu__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnBuildMenu__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnBuildMenu__PythonCallable;
	static GetDefaultObject(): OnBuildMenu__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnBuildMenu__PythonCallable;
	static C(Other: UObject | any): OnBuildMenu__PythonCallable;
}

declare class OnCanCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnCanCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnCanCreateConnection__PythonCallable;
	static GetDefaultObject(): OnCanCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnCanCreateConnection__PythonCallable;
	static C(Other: UObject | any): OnCanCreateConnection__PythonCallable;
}

declare class OnContextActions__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContextActions__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContextActions__PythonCallable;
	static GetDefaultObject(): OnContextActions__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContextActions__PythonCallable;
	static C(Other: UObject | any): OnContextActions__PythonCallable;
}

declare class OnCreateAutomaticConversionNodeAndConnections__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static GetDefaultObject(): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static C(Other: UObject | any): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
}

declare class OnCreatePin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnCreatePin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnCreatePin__PythonCallable;
	static GetDefaultObject(): OnCreatePin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnCreatePin__PythonCallable;
	static C(Other: UObject | any): OnCreatePin__PythonCallable;
}

declare class OnDetermineLinkGeometry__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDetermineLinkGeometry__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDetermineLinkGeometry__PythonCallable;
	static GetDefaultObject(): OnDetermineLinkGeometry__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDetermineLinkGeometry__PythonCallable;
	static C(Other: UObject | any): OnDetermineLinkGeometry__PythonCallable;
}

declare class OnDetermineWiringStyle__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDetermineWiringStyle__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDetermineWiringStyle__PythonCallable;
	static GetDefaultObject(): OnDetermineWiringStyle__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDetermineWiringStyle__PythonCallable;
	static C(Other: UObject | any): OnDetermineWiringStyle__PythonCallable;
}

declare class OnDrawPreviewConnector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawPreviewConnector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawPreviewConnector__PythonCallable;
	static GetDefaultObject(): OnDrawPreviewConnector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawPreviewConnector__PythonCallable;
	static C(Other: UObject | any): OnDrawPreviewConnector__PythonCallable;
}

declare class OnDrawSplineWithArrow__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawSplineWithArrow__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawSplineWithArrow__PythonCallable;
	static GetDefaultObject(): OnDrawSplineWithArrow__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawSplineWithArrow__PythonCallable;
	static C(Other: UObject | any): OnDrawSplineWithArrow__PythonCallable;
}

declare class OnDrawSplineWithArrow_Geom__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawSplineWithArrow_Geom__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawSplineWithArrow_Geom__PythonCallable;
	static GetDefaultObject(): OnDrawSplineWithArrow_Geom__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawSplineWithArrow_Geom__PythonCallable;
	static C(Other: UObject | any): OnDrawSplineWithArrow_Geom__PythonCallable;
}

declare class OnEdNodeAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnEdNodeAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnEdNodeAction__PythonCallable;
	static GetDefaultObject(): OnEdNodeAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnEdNodeAction__PythonCallable;
	static C(Other: UObject | any): OnEdNodeAction__PythonCallable;
}

declare class OnGetBoolean__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBoolean__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBoolean__PythonCallable;
	static GetDefaultObject(): OnGetBoolean__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBoolean__PythonCallable;
	static C(Other: UObject | any): OnGetBoolean__PythonCallable;
}

declare class OnGetBoolean_GraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBoolean_GraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBoolean_GraphPin__PythonCallable;
	static GetDefaultObject(): OnGetBoolean_GraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBoolean_GraphPin__PythonCallable;
	static C(Other: UObject | any): OnGetBoolean_GraphPin__PythonCallable;
}

declare class OnGetBooleanMoveTo__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBooleanMoveTo__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBooleanMoveTo__PythonCallable;
	static GetDefaultObject(): OnGetBooleanMoveTo__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBooleanMoveTo__PythonCallable;
	static C(Other: UObject | any): OnGetBooleanMoveTo__PythonCallable;
}

declare class OnGetBooleanWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBooleanWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBooleanWidget__PythonCallable;
	static GetDefaultObject(): OnGetBooleanWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBooleanWidget__PythonCallable;
	static C(Other: UObject | any): OnGetBooleanWidget__PythonCallable;
}

declare class OnGetCustomPinBoxWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetCustomPinBoxWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetCustomPinBoxWidget__PythonCallable;
	static GetDefaultObject(): OnGetCustomPinBoxWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetCustomPinBoxWidget__PythonCallable;
	static C(Other: UObject | any): OnGetCustomPinBoxWidget__PythonCallable;
}

declare class OnGetPinColor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetPinColor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetPinColor__PythonCallable;
	static GetDefaultObject(): OnGetPinColor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetPinColor__PythonCallable;
	static C(Other: UObject | any): OnGetPinColor__PythonCallable;
}

declare class OnGetPins__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetPins__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetPins__PythonCallable;
	static GetDefaultObject(): OnGetPins__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetPins__PythonCallable;
	static C(Other: UObject | any): OnGetPins__PythonCallable;
}

declare class OnGetSideMarginInPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetSideMarginInPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetSideMarginInPin__PythonCallable;
	static GetDefaultObject(): OnGetSideMarginInPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetSideMarginInPin__PythonCallable;
	static C(Other: UObject | any): OnGetSideMarginInPin__PythonCallable;
}

declare class OnGetSlateBrushName__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetSlateBrushName__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetSlateBrushName__PythonCallable;
	static GetDefaultObject(): OnGetSlateBrushName__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetSlateBrushName__PythonCallable;
	static C(Other: UObject | any): OnGetSlateBrushName__PythonCallable;
}

declare class OnGetString__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetString__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetString__PythonCallable;
	static GetDefaultObject(): OnGetString__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetString__PythonCallable;
	static C(Other: UObject | any): OnGetString__PythonCallable;
}

declare class OnMouseDragEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseDragEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseDragEvent__PythonCallable;
	static GetDefaultObject(): OnMouseDragEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseDragEvent__PythonCallable;
	static C(Other: UObject | any): OnMouseDragEvent__PythonCallable;
}

declare class OnMouseEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseEvent__PythonCallable;
	static GetDefaultObject(): OnMouseEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseEvent__PythonCallable;
	static C(Other: UObject | any): OnMouseEvent__PythonCallable;
}

declare class OnMouseEventAdvanced__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseEventAdvanced__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseEventAdvanced__PythonCallable;
	static GetDefaultObject(): OnMouseEventAdvanced__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseEventAdvanced__PythonCallable;
	static C(Other: UObject | any): OnMouseEventAdvanced__PythonCallable;
}

declare class OnPerformAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnPerformAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnPerformAction__PythonCallable;
	static GetDefaultObject(): OnPerformAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnPerformAction__PythonCallable;
	static C(Other: UObject | any): OnPerformAction__PythonCallable;
}

declare class OnPerformSecondPassLayout__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnPerformSecondPassLayout__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnPerformSecondPassLayout__PythonCallable;
	static GetDefaultObject(): OnPerformSecondPassLayout__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnPerformSecondPassLayout__PythonCallable;
	static C(Other: UObject | any): OnPerformSecondPassLayout__PythonCallable;
}

declare class OnPinConnectionListChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnPinConnectionListChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnPinConnectionListChanged__PythonCallable;
	static GetDefaultObject(): OnPinConnectionListChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnPinConnectionListChanged__PythonCallable;
	static C(Other: UObject | any): OnPinConnectionListChanged__PythonCallable;
}

declare class OnShouldAlwaysPurgeOnModification__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static GetDefaultObject(): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static C(Other: UObject | any): OnShouldAlwaysPurgeOnModification__PythonCallable;
}

declare class OnTakeContentWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTakeContentWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTakeContentWidget__PythonCallable;
	static GetDefaultObject(): OnTakeContentWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTakeContentWidget__PythonCallable;
	static C(Other: UObject | any): OnTakeContentWidget__PythonCallable;
}

declare class OnTakeWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTakeWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTakeWidget__PythonCallable;
	static GetDefaultObject(): OnTakeWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTakeWidget__PythonCallable;
	static C(Other: UObject | any): OnTakeWidget__PythonCallable;
}

declare class OnTryCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTryCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTryCreateConnection__PythonCallable;
	static GetDefaultObject(): OnTryCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTryCreateConnection__PythonCallable;
	static C(Other: UObject | any): OnTryCreateConnection__PythonCallable;
}

declare class OnVectorArith__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnVectorArith__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnVectorArith__PythonCallable;
	static GetDefaultObject(): OnVectorArith__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnVectorArith__PythonCallable;
	static C(Other: UObject | any): OnVectorArith__PythonCallable;
}

declare class DynamicSimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): DynamicSimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): DynamicSimpleDelegate__PythonCallable;
	static GetDefaultObject(): DynamicSimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSimpleDelegate__PythonCallable;
	static C(Other: UObject | any): DynamicSimpleDelegate__PythonCallable;
}

declare class DynamicSimpleGetBoolDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static GetDefaultObject(): DynamicSimpleGetBoolDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSimpleGetBoolDelegate__PythonCallable;
	static C(Other: UObject | any): DynamicSimpleGetBoolDelegate__PythonCallable;
}

declare class OnGenerateCustomCellWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGenerateCustomCellWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGenerateCustomCellWidget__PythonCallable;
	static GetDefaultObject(): OnGenerateCustomCellWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGenerateCustomCellWidget__PythonCallable;
	static C(Other: UObject | any): OnGenerateCustomCellWidget__PythonCallable;
}

declare class OnUseCustomCellWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnUseCustomCellWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnUseCustomCellWidget__PythonCallable;
	static GetDefaultObject(): OnUseCustomCellWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnUseCustomCellWidget__PythonCallable;
	static C(Other: UObject | any): OnUseCustomCellWidget__PythonCallable;
}

declare class PropertyEditorPropertyChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static GetDefaultObject(): PropertyEditorPropertyChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditorPropertyChanged__PythonCallable;
	static C(Other: UObject | any): PropertyEditorPropertyChanged__PythonCallable;
}

declare class PropertyEditorReadOnly__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): PropertyEditorReadOnly__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): PropertyEditorReadOnly__PythonCallable;
	static GetDefaultObject(): PropertyEditorReadOnly__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditorReadOnly__PythonCallable;
	static C(Other: UObject | any): PropertyEditorReadOnly__PythonCallable;
}

declare class OnBeforePopup__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnBeforePopup__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnBeforePopup__PythonCallable;
	static GetDefaultObject(): OnBeforePopup__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnBeforePopup__PythonCallable;
	static C(Other: UObject | any): OnBeforePopup__PythonCallable;
}

declare class OnUrlChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnUrlChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnUrlChanged__PythonCallable;
	static GetDefaultObject(): OnUrlChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnUrlChanged__PythonCallable;
	static C(Other: UObject | any): OnUrlChanged__PythonCallable;
}

declare class OnHook__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnHook__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnHook__PythonCallable;
	static GetDefaultObject(): OnHook__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnHook__PythonCallable;
	static C(Other: UObject | any): OnHook__PythonCallable;
}

declare class JavascriptCanExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptCanExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptCanExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptCanExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCanExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptCanExecuteAction__PythonCallable;
}

declare class JavascriptExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptExecuteAction__PythonCallable;
}

declare class OnClick_Backward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Backward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Backward__PythonCallable;
	static GetDefaultObject(): OnClick_Backward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Backward__PythonCallable;
	static C(Other: UObject | any): OnClick_Backward__PythonCallable;
}

declare class OnClick_Backward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Backward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Backward_End__PythonCallable;
	static GetDefaultObject(): OnClick_Backward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Backward_End__PythonCallable;
	static C(Other: UObject | any): OnClick_Backward_End__PythonCallable;
}

declare class OnClick_Backward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Backward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Backward_Step__PythonCallable;
	static GetDefaultObject(): OnClick_Backward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Backward_Step__PythonCallable;
	static C(Other: UObject | any): OnClick_Backward_Step__PythonCallable;
}

declare class OnClick_Forward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Forward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Forward__PythonCallable;
	static GetDefaultObject(): OnClick_Forward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Forward__PythonCallable;
	static C(Other: UObject | any): OnClick_Forward__PythonCallable;
}

declare class OnClick_Forward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Forward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Forward_End__PythonCallable;
	static GetDefaultObject(): OnClick_Forward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Forward_End__PythonCallable;
	static C(Other: UObject | any): OnClick_Forward_End__PythonCallable;
}

declare class OnClick_Forward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Forward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Forward_Step__PythonCallable;
	static GetDefaultObject(): OnClick_Forward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Forward_Step__PythonCallable;
	static C(Other: UObject | any): OnClick_Forward_Step__PythonCallable;
}

declare class OnClick_ToggleLoop__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_ToggleLoop__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_ToggleLoop__PythonCallable;
	static GetDefaultObject(): OnClick_ToggleLoop__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_ToggleLoop__PythonCallable;
	static C(Other: UObject | any): OnClick_ToggleLoop__PythonCallable;
}

declare class SetPlaybackPosition__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SetPlaybackPosition__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SetPlaybackPosition__PythonCallable;
	static GetDefaultObject(): SetPlaybackPosition__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetPlaybackPosition__PythonCallable;
	static C(Other: UObject | any): SetPlaybackPosition__PythonCallable;
}

declare class CustomChildren__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CustomChildren__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CustomChildren__PythonCallable;
	static GetDefaultObject(): CustomChildren__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomChildren__PythonCallable;
	static C(Other: UObject | any): CustomChildren__PythonCallable;
}

declare class CustomHeader__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CustomHeader__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CustomHeader__PythonCallable;
	static GetDefaultObject(): CustomHeader__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomHeader__PythonCallable;
	static C(Other: UObject | any): CustomHeader__PythonCallable;
}

declare class OnDestroy__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDestroy__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDestroy__PythonCallable;
	static GetDefaultObject(): OnDestroy__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDestroy__PythonCallable;
	static C(Other: UObject | any): OnDestroy__PythonCallable;
}

declare class CheckDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CheckDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CheckDelegate__PythonCallable;
	static GetDefaultObject(): CheckDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CheckDelegate__PythonCallable;
	static C(Other: UObject | any): CheckDelegate__PythonCallable;
}

declare class OnNewLogMessage__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnNewLogMessage__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnNewLogMessage__PythonCallable;
	static GetDefaultObject(): OnNewLogMessage__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnNewLogMessage__PythonCallable;
	static C(Other: UObject | any): OnNewLogMessage__PythonCallable;
}

declare class ActorDuplicated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ActorDuplicated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ActorDuplicated__PythonCallable;
	static GetDefaultObject(): ActorDuplicated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorDuplicated__PythonCallable;
	static C(Other: UObject | any): ActorDuplicated__PythonCallable;
}

declare class OnClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick__PythonCallable;
	static GetDefaultObject(): OnClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick__PythonCallable;
	static C(Other: UObject | any): OnClick__PythonCallable;
}

declare class OnDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDraw__PythonCallable;
	static GetDefaultObject(): OnDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDraw__PythonCallable;
	static C(Other: UObject | any): OnDraw__PythonCallable;
}

declare class OnDrawHUD__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawHUD__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawHUD__PythonCallable;
	static GetDefaultObject(): OnDrawHUD__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawHUD__PythonCallable;
	static C(Other: UObject | any): OnDrawHUD__PythonCallable;
}

declare class OnGetAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetAction__PythonCallable;
	static GetDefaultObject(): OnGetAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetAction__PythonCallable;
	static C(Other: UObject | any): OnGetAction__PythonCallable;
}

declare class OnGetWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidget__PythonCallable;
	static GetDefaultObject(): OnGetWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidget__PythonCallable;
	static C(Other: UObject | any): OnGetWidget__PythonCallable;
}

declare class OnIsCompatibleWith__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnIsCompatibleWith__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnIsCompatibleWith__PythonCallable;
	static GetDefaultObject(): OnIsCompatibleWith__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnIsCompatibleWith__PythonCallable;
	static C(Other: UObject | any): OnIsCompatibleWith__PythonCallable;
}

declare class OnProcess__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnProcess__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnProcess__PythonCallable;
	static GetDefaultObject(): OnProcess__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnProcess__PythonCallable;
	static C(Other: UObject | any): OnProcess__PythonCallable;
}

declare class OnSelect__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnSelect__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnSelect__PythonCallable;
	static GetDefaultObject(): OnSelect__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnSelect__PythonCallable;
	static C(Other: UObject | any): OnSelect__PythonCallable;
}

declare class OnSelectionChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnSelectionChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnSelectionChanged__PythonCallable;
	static GetDefaultObject(): OnSelectionChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnSelectionChanged__PythonCallable;
	static C(Other: UObject | any): OnSelectionChanged__PythonCallable;
}

declare class OnUsesToolkits__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnUsesToolkits__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnUsesToolkits__PythonCallable;
	static GetDefaultObject(): OnUsesToolkits__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnUsesToolkits__PythonCallable;
	static C(Other: UObject | any): OnUsesToolkits__PythonCallable;
}

declare class QueryVector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QueryVector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QueryVector__PythonCallable;
	static GetDefaultObject(): QueryVector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QueryVector__PythonCallable;
	static C(Other: UObject | any): QueryVector__PythonCallable;
}

declare class Viewport0__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): Viewport0__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): Viewport0__PythonCallable;
	static GetDefaultObject(): Viewport0__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Viewport0__PythonCallable;
	static C(Other: UObject | any): Viewport0__PythonCallable;
}

declare class ViewportAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportAxis__PythonCallable;
	static GetDefaultObject(): ViewportAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportAxis__PythonCallable;
	static C(Other: UObject | any): ViewportAxis__PythonCallable;
}

declare class ViewportDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportDelta__PythonCallable;
	static GetDefaultObject(): ViewportDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportDelta__PythonCallable;
	static C(Other: UObject | any): ViewportDelta__PythonCallable;
}

declare class ViewportKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportKey__PythonCallable;
	static GetDefaultObject(): ViewportKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportKey__PythonCallable;
	static C(Other: UObject | any): ViewportKey__PythonCallable;
}

declare class ViewportXY__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportXY__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportXY__PythonCallable;
	static GetDefaultObject(): ViewportXY__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportXY__PythonCallable;
	static C(Other: UObject | any): ViewportXY__PythonCallable;
}

declare class OnGetWidgetLocation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidgetLocation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidgetLocation__PythonCallable;
	static GetDefaultObject(): OnGetWidgetLocation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidgetLocation__PythonCallable;
	static C(Other: UObject | any): OnGetWidgetLocation__PythonCallable;
}

declare class OnGetWidgetMode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidgetMode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidgetMode__PythonCallable;
	static GetDefaultObject(): OnGetWidgetMode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidgetMode__PythonCallable;
	static C(Other: UObject | any): OnGetWidgetMode__PythonCallable;
}

declare class OnGetWidgetRotation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidgetRotation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidgetRotation__PythonCallable;
	static GetDefaultObject(): OnGetWidgetRotation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidgetRotation__PythonCallable;
	static C(Other: UObject | any): OnGetWidgetRotation__PythonCallable;
}

declare class OnInputAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputAxis__PythonCallable;
	static GetDefaultObject(): OnInputAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputAxis__PythonCallable;
	static C(Other: UObject | any): OnInputAxis__PythonCallable;
}

declare class OnInputKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputKey__PythonCallable;
	static GetDefaultObject(): OnInputKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputKey__PythonCallable;
	static C(Other: UObject | any): OnInputKey__PythonCallable;
}

declare class OnInputWidgetDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputWidgetDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputWidgetDelta__PythonCallable;
	static GetDefaultObject(): OnInputWidgetDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputWidgetDelta__PythonCallable;
	static C(Other: UObject | any): OnInputWidgetDelta__PythonCallable;
}

declare class OnMouseEnter__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseEnter__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseEnter__PythonCallable;
	static GetDefaultObject(): OnMouseEnter__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseEnter__PythonCallable;
	static C(Other: UObject | any): OnMouseEnter__PythonCallable;
}

declare class OnMouseLeave__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseLeave__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseLeave__PythonCallable;
	static GetDefaultObject(): OnMouseLeave__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseLeave__PythonCallable;
	static C(Other: UObject | any): OnMouseLeave__PythonCallable;
}

declare class OnMouseMove__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseMove__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseMove__PythonCallable;
	static GetDefaultObject(): OnMouseMove__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseMove__PythonCallable;
	static C(Other: UObject | any): OnMouseMove__PythonCallable;
}

declare class OnViewportClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportClick__PythonCallable;
	static GetDefaultObject(): OnViewportClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportClick__PythonCallable;
	static C(Other: UObject | any): OnViewportClick__PythonCallable;
}

declare class OnViewportDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportDraw__PythonCallable;
	static GetDefaultObject(): OnViewportDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportDraw__PythonCallable;
	static C(Other: UObject | any): OnViewportDraw__PythonCallable;
}

declare class OnViewportDrawCanvas__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportDrawCanvas__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportDrawCanvas__PythonCallable;
	static GetDefaultObject(): OnViewportDrawCanvas__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportDrawCanvas__PythonCallable;
	static C(Other: UObject | any): OnViewportDrawCanvas__PythonCallable;
}

declare class OnViewportTrackingStarted__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportTrackingStarted__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportTrackingStarted__PythonCallable;
	static GetDefaultObject(): OnViewportTrackingStarted__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportTrackingStarted__PythonCallable;
	static C(Other: UObject | any): OnViewportTrackingStarted__PythonCallable;
}

declare class OnViewportTrackingStopped__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportTrackingStopped__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportTrackingStopped__PythonCallable;
	static GetDefaultObject(): OnViewportTrackingStopped__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportTrackingStopped__PythonCallable;
	static C(Other: UObject | any): OnViewportTrackingStopped__PythonCallable;
}

declare class JavascriptEditorTickSignature__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTickSignature__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTickSignature__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTickSignature__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTickSignature__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTickSignature__PythonCallable;
}

declare class CloseTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CloseTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CloseTab__PythonCallable;
	static GetDefaultObject(): CloseTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CloseTab__PythonCallable;
	static C(Other: UObject | any): CloseTab__PythonCallable;
}

declare class OnTabActivated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTabActivated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTabActivated__PythonCallable;
	static GetDefaultObject(): OnTabActivated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTabActivated__PythonCallable;
	static C(Other: UObject | any): OnTabActivated__PythonCallable;
}

declare class SpawnTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SpawnTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SpawnTab__PythonCallable;
	static GetDefaultObject(): SpawnTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpawnTab__PythonCallable;
	static C(Other: UObject | any): SpawnTab__PythonCallable;
}

declare class JavascriptGetExtender__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGetExtender__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGetExtender__PythonCallable;
	static GetDefaultObject(): JavascriptGetExtender__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGetExtender__PythonCallable;
	static C(Other: UObject | any): JavascriptGetExtender__PythonCallable;
}

declare class OnColorChangedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnColorChangedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnColorChangedEvent__PythonCallable;
	static GetDefaultObject(): OnColorChangedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnColorChangedEvent__PythonCallable;
	static C(Other: UObject | any): OnColorChangedEvent__PythonCallable;
}

declare class OnSetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnSetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnSetDefaultValue__PythonCallable;
	static GetDefaultObject(): OnSetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnSetDefaultValue__PythonCallable;
	static C(Other: UObject | any): OnSetDefaultValue__PythonCallable;
}

declare class AudioSynesthesiaNRTFactory extends Factory { 
	AudioSynesthesiaNRTClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaNRTFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRTFactory;
	static GetDefaultObject(): AudioSynesthesiaNRTFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRTFactory;
	static C(Other: UObject | any): AudioSynesthesiaNRTFactory;
}

declare class AudioSynesthesiaNRTSettingsFactory extends Factory { 
	AudioSynesthesiaNRTSettingsClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaNRTSettingsFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRTSettingsFactory;
	static GetDefaultObject(): AudioSynesthesiaNRTSettingsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRTSettingsFactory;
	static C(Other: UObject | any): AudioSynesthesiaNRTSettingsFactory;
}

declare class AudioSynesthesiaSettingsFactory extends Factory { 
	AudioSynesthesiaSettingsClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaSettingsFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaSettingsFactory;
	static GetDefaultObject(): AudioSynesthesiaSettingsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaSettingsFactory;
	static C(Other: UObject | any): AudioSynesthesiaSettingsFactory;
}

declare class LevelInstanceEditorMode extends EdMode { 
	static Load(ResourceName: string): LevelInstanceEditorMode;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorMode;
	static GetDefaultObject(): LevelInstanceEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorMode;
	static C(Other: UObject | any): LevelInstanceEditorMode;
}

declare class LevelInstanceEditorSettings extends UObject { 
	TemplateMapInfos: TemplateMapInfo[];
	static Load(ResourceName: string): LevelInstanceEditorSettings;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorSettings;
	static GetDefaultObject(): LevelInstanceEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorSettings;
	static C(Other: UObject | any): LevelInstanceEditorSettings;
}

declare class MockAI extends UObject { 
	Actor: Actor;
	BBComp: BlackboardComponent;
	BrainComp: BrainComponent;
	PerceptionComp: AIPerceptionComponent;
	PawnActionComp: PawnActionsComponent;
	static Load(ResourceName: string): MockAI;
	static Find(Outer: UObject, ResourceName: string): MockAI;
	static GetDefaultObject(): MockAI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI;
	static C(Other: UObject | any): MockAI;
}

declare class MockAI_BT extends MockAI { 
	BTComp: BehaviorTreeComponent;
	static Load(ResourceName: string): MockAI_BT;
	static Find(Outer: UObject, ResourceName: string): MockAI_BT;
	static GetDefaultObject(): MockAI_BT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI_BT;
	static C(Other: UObject | any): MockAI_BT;
}

declare class MockTask_Log extends GameplayTask { 
	static Load(ResourceName: string): MockTask_Log;
	static Find(Outer: UObject, ResourceName: string): MockTask_Log;
	static GetDefaultObject(): MockTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockTask_Log;
	static C(Other: UObject | any): MockTask_Log;
}

declare class MockGameplayTasksComponent extends GameplayTasksComponent { 
	static Load(ResourceName: string): MockGameplayTasksComponent;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTasksComponent;
	static GetDefaultObject(): MockGameplayTasksComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTasksComponent;
	static C(Other: UObject | any): MockGameplayTasksComponent;
}

declare class MockGameplayTaskOwner extends UObject { 
	GTComponent: GameplayTasksComponent;
	static Load(ResourceName: string): MockGameplayTaskOwner;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTaskOwner;
	static GetDefaultObject(): MockGameplayTaskOwner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTaskOwner;
	static C(Other: UObject | any): MockGameplayTaskOwner;
}

declare class TestBTDecorator_Blackboard extends BTDecorator_Blackboard { 
	LogIndexBecomeRelevant: number;
	LogIndexCeaseRelevant: number;
	LogIndexCalculate: number;
	static Load(ResourceName: string): TestBTDecorator_Blackboard;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_Blackboard;
	static GetDefaultObject(): TestBTDecorator_Blackboard;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_Blackboard;
	static C(Other: UObject | any): TestBTDecorator_Blackboard;
}

declare class TestBTDecorator_CantExecute extends BTDecorator { 
	static Load(ResourceName: string): TestBTDecorator_CantExecute;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_CantExecute;
	static GetDefaultObject(): TestBTDecorator_CantExecute;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_CantExecute;
	static C(Other: UObject | any): TestBTDecorator_CantExecute;
}

declare class TestBTDecorator_DelayedAbort extends BTDecorator { 
	DelayTicks: number;
	bOnlyOnce: boolean;
	static Load(ResourceName: string): TestBTDecorator_DelayedAbort;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_DelayedAbort;
	static GetDefaultObject(): TestBTDecorator_DelayedAbort;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_DelayedAbort;
	static C(Other: UObject | any): TestBTDecorator_DelayedAbort;
}

declare class TestBTService_Log extends BTService { 
	LogActivation: number;
	LogDeactivation: number;
	KeyNameTick: string;
	KeyNameBecomeRelevant: string;
	KeyNameCeaseRelevant: string;
	LogTick: number;
	static Load(ResourceName: string): TestBTService_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTService_Log;
	static GetDefaultObject(): TestBTService_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_Log;
	static C(Other: UObject | any): TestBTService_Log;
}

declare class TestBTTask_LatentWithFlags extends BTTaskNode { 
	LogIndexExecuteStart: number;
	LogIndexExecuting: number;
	LogIndexExecuteFinish: number;
	LogIndexAbortStart: number;
	LogIndexAborting: number;
	LogIndexAbortFinish: number;
	ExecuteHalfTicks: number;
	AbortHalfTicks: number;
	KeyNameExecute: string;
	KeyNameAbort: string;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_LatentWithFlags;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_LatentWithFlags;
	static GetDefaultObject(): TestBTTask_LatentWithFlags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_LatentWithFlags;
	static C(Other: UObject | any): TestBTTask_LatentWithFlags;
}

declare class TestBTTask_Log extends BTTaskNode { 
	LogIndex: number;
	LogFinished: number;
	ExecutionTicks: number;
	LogTickIndex: number;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_Log;
	static GetDefaultObject(): TestBTTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_Log;
	static C(Other: UObject | any): TestBTTask_Log;
}

declare class TestBTTask_SetFlag extends BTTaskNode { 
	KeyName: string;
	bValue: boolean;
	OnAbortKeyName: string;
	bOnAbortValue: boolean;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetFlag;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetFlag;
	static GetDefaultObject(): TestBTTask_SetFlag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetFlag;
	static C(Other: UObject | any): TestBTTask_SetFlag;
}

declare class TestBTTask_SetValue extends BTTaskNode { 
	KeyName: string;
	Value: number;
	OnAbortKeyName: string;
	OnAbortValue: number;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetValue;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetValue;
	static GetDefaultObject(): TestBTTask_SetValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetValue;
	static C(Other: UObject | any): TestBTTask_SetValue;
}

declare class TestPawnAction_Log extends PawnAction { 
	static Load(ResourceName: string): TestPawnAction_Log;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_Log;
	static GetDefaultObject(): TestPawnAction_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_Log;
	static C(Other: UObject | any): TestPawnAction_Log;
}

declare class TestPawnAction_CallFunction extends TestPawnAction_Log { 
	static Load(ResourceName: string): TestPawnAction_CallFunction;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_CallFunction;
	static GetDefaultObject(): TestPawnAction_CallFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_CallFunction;
	static C(Other: UObject | any): TestPawnAction_CallFunction;
}

declare type ELiveCodingStartupMode = 'Automatic' | 'AutomaticButHidden' | 'Manual' | 'ELiveCodingStartupMode_MAX';
declare var ELiveCodingStartupMode : { Automatic:'Automatic',AutomaticButHidden:'AutomaticButHidden',Manual:'Manual',ELiveCodingStartupMode_MAX:'ELiveCodingStartupMode_MAX', };
declare class LiveCodingSettings extends UObject { 
	bEnabled: boolean;
	Startup: ELiveCodingStartupMode;
	bEnableReinstancing: boolean;
	bAutomaticallyCompileNewClasses: boolean;
	bPreloadEngineModules: boolean;
	bPreloadEnginePluginModules: boolean;
	bPreloadProjectModules: boolean;
	bPreloadProjectPluginModules: boolean;
	PreloadNamedModules: string[];
	static Load(ResourceName: string): LiveCodingSettings;
	static Find(Outer: UObject, ResourceName: string): LiveCodingSettings;
	static GetDefaultObject(): LiveCodingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveCodingSettings;
	static C(Other: UObject | any): LiveCodingSettings;
}

declare class NaniteAuditErrorArguments extends EditorConfigBase { 
	ProhibitUnsupportedBlendMode: boolean;
	ProhibitVertexInterpolator: boolean;
	ProhibitPixelDepthOffset: boolean;
	ProhibitWorldPositionOffset: boolean;
	static Load(ResourceName: string): NaniteAuditErrorArguments;
	static Find(Outer: UObject, ResourceName: string): NaniteAuditErrorArguments;
	static GetDefaultObject(): NaniteAuditErrorArguments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NaniteAuditErrorArguments;
	static C(Other: UObject | any): NaniteAuditErrorArguments;
}

declare class NaniteAuditOptimizeArguments extends EditorConfigBase { 
	TriangleThreshold: any;
	DisallowUnsupportedBlendMode: boolean;
	DisallowVertexInterpolator: boolean;
	DisallowPixelDepthOffset: boolean;
	DisallowWorldPositionOffset: boolean;
	static Load(ResourceName: string): NaniteAuditOptimizeArguments;
	static Find(Outer: UObject, ResourceName: string): NaniteAuditOptimizeArguments;
	static GetDefaultObject(): NaniteAuditOptimizeArguments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NaniteAuditOptimizeArguments;
	static C(Other: UObject | any): NaniteAuditOptimizeArguments;
}

declare class StructViewerProjectSettings extends UObject { 
	InternalOnlyPaths: DirectoryPath[];
	InternalOnlyStructs: ScriptStruct[];
	static Load(ResourceName: string): StructViewerProjectSettings;
	static Find(Outer: UObject, ResourceName: string): StructViewerProjectSettings;
	static GetDefaultObject(): StructViewerProjectSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StructViewerProjectSettings;
	static C(Other: UObject | any): StructViewerProjectSettings;
}

declare class AnimationBlueprintEditorSettings extends UObject { 
	bPoseWatchSelectedNodes: boolean;
	bShowGraphCornerText: boolean;
	static Load(ResourceName: string): AnimationBlueprintEditorSettings;
	static Find(Outer: UObject, ResourceName: string): AnimationBlueprintEditorSettings;
	static GetDefaultObject(): AnimationBlueprintEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationBlueprintEditorSettings;
	static C(Other: UObject | any): AnimationBlueprintEditorSettings;
}

declare class LocalizationDashboardSettings extends UObject { 
	static Load(ResourceName: string): LocalizationDashboardSettings;
	static Find(Outer: UObject, ResourceName: string): LocalizationDashboardSettings;
	static GetDefaultObject(): LocalizationDashboardSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationDashboardSettings;
	static C(Other: UObject | any): LocalizationDashboardSettings;
}

declare class MeshApproximationSettingsObject extends UObject { 
	Settings: MeshApproximationSettings;
	static Load(ResourceName: string): MeshApproximationSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshApproximationSettingsObject;
	static GetDefaultObject(): MeshApproximationSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshApproximationSettingsObject;
	static C(Other: UObject | any): MeshApproximationSettingsObject;
}

declare class MeshInstancingSettings { 
	ActorClassToUse: UnrealEngineClass;
	InstanceReplacementThreshold: number;
	bSkipMeshesWithVertexColors: boolean;
	bUseHLODVolumes: boolean;
	ISMComponentToUse: UnrealEngineClass;
	clone() : MeshInstancingSettings;
	static C(Other: UObject | any): MeshInstancingSettings;
}

declare class MeshInstancingSettingsObject extends UObject { 
	Settings: MeshInstancingSettings;
	static Load(ResourceName: string): MeshInstancingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshInstancingSettingsObject;
	static GetDefaultObject(): MeshInstancingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInstancingSettingsObject;
	static C(Other: UObject | any): MeshInstancingSettingsObject;
}

declare class MeshMergingSettingsObject extends UObject { 
	Settings: MeshMergingSettings;
	static Load(ResourceName: string): MeshMergingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshMergingSettingsObject;
	static GetDefaultObject(): MeshMergingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshMergingSettingsObject;
	static C(Other: UObject | any): MeshMergingSettingsObject;
}

declare class MeshProxySettingsObject extends UObject { 
	Settings: MeshProxySettings;
	static Load(ResourceName: string): MeshProxySettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshProxySettingsObject;
	static GetDefaultObject(): MeshProxySettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshProxySettingsObject;
	static C(Other: UObject | any): MeshProxySettingsObject;
}

declare class EditorKeyboardShortcutSettings extends DeveloperSettings { 
	static Load(ResourceName: string): EditorKeyboardShortcutSettings;
	static Find(Outer: UObject, ResourceName: string): EditorKeyboardShortcutSettings;
	static GetDefaultObject(): EditorKeyboardShortcutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorKeyboardShortcutSettings;
	static C(Other: UObject | any): EditorKeyboardShortcutSettings;
}

declare class HLODLayerFactory extends Factory { 
	static Load(ResourceName: string): HLODLayerFactory;
	static Find(Outer: UObject, ResourceName: string): HLODLayerFactory;
	static GetDefaultObject(): HLODLayerFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODLayerFactory;
	static C(Other: UObject | any): HLODLayerFactory;
}

declare class WorldPartitionConvertOptions extends UObject { 
	CommandletClass: UnrealEngineClass;
	bInPlace: boolean;
	bDeleteSourceLevels: boolean;
	bGenerateIni: boolean;
	bReportOnly: boolean;
	bVerbose: boolean;
	bSkipStableGUIDValidation: boolean;
	bOnlyMergeSubLevels: boolean;
	bSaveFoliageTypeToContentFolder: boolean;
	static Load(ResourceName: string): WorldPartitionConvertOptions;
	static Find(Outer: UObject, ResourceName: string): WorldPartitionConvertOptions;
	static GetDefaultObject(): WorldPartitionConvertOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorldPartitionConvertOptions;
	static C(Other: UObject | any): WorldPartitionConvertOptions;
}

declare class WorldPartitionEditorSettings extends DeveloperSettings { 
	CommandletClass: UnrealEngineClass;
	InstancedFoliageGridSize: number;
	static Load(ResourceName: string): WorldPartitionEditorSettings;
	static Find(Outer: UObject, ResourceName: string): WorldPartitionEditorSettings;
	static GetDefaultObject(): WorldPartitionEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorldPartitionEditorSettings;
	static C(Other: UObject | any): WorldPartitionEditorSettings;
}

declare type ESVGTheme = 'Dark' | 'Light' | 'ESVGTheme_MAX';
declare var ESVGTheme : { Dark:'Dark',Light:'Light',ESVGTheme_MAX:'ESVGTheme_MAX', };
declare class CSVtoSVGArugments extends EditorConfigBase { 
	CSV: FilePath;
	OutputDirectory: DirectoryPath;
	OutputFilename: string;
	skipRows: number;
	MinX: number;
	MaxX: number;
	MinY: number;
	MaxY: number;
	smooth: boolean;
	smoothKernelSize: number;
	smoothKernelPercent: number;
	Width: number;
	Height: number;
	Title: string;
	noMetadata: boolean;
	graphOnly: boolean;
	budget: number;
	Thickness: number;
	theme: ESVGTheme;
	Threshold: number;
	stacked: boolean;
	stacktotalstack: string;
	Interactive: boolean;
	showaverages: boolean;
	colourOffset: number;
	averageThreshold: number;
	static Load(ResourceName: string): CSVtoSVGArugments;
	static Find(Outer: UObject, ResourceName: string): CSVtoSVGArugments;
	static GetDefaultObject(): CSVtoSVGArugments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CSVtoSVGArugments;
	static C(Other: UObject | any): CSVtoSVGArugments;
}

declare type EAndroidInstallLocation = 'InternalOnly' | 'PreferExternal' | 'Auto' | 'EAndroidInstallLocation_MAX';
declare var EAndroidInstallLocation : { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto',EAndroidInstallLocation_MAX:'EAndroidInstallLocation_MAX', };
declare type EAndroidScreenOrientation = 'Portrait' | 'ReversePortrait' | 'SensorPortrait' | 'Landscape' | 'ReverseLandscape' | 'SensorLandscape' | 'Sensor' | 'FullSensor' | 'EAndroidScreenOrientation_MAX';
declare var EAndroidScreenOrientation : { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor',EAndroidScreenOrientation_MAX:'EAndroidScreenOrientation_MAX', };
declare type EAndroidDepthBufferPreference = 'Default' | 'Bits16' | 'Bits24' | 'Bits32' | 'EAndroidDepthBufferPreference_MAX';
declare var EAndroidDepthBufferPreference : { Default:'Default',Bits16:'Bits16',Bits24:'Bits24',Bits32:'Bits32',EAndroidDepthBufferPreference_MAX:'EAndroidDepthBufferPreference_MAX', };
declare type EOculusMobileDevice = 'Quest' | 'Quest2' | 'EOculusMobileDevice_MAX';
declare var EOculusMobileDevice : { Quest:'Quest',Quest2:'Quest2',EOculusMobileDevice_MAX:'EOculusMobileDevice_MAX', };
declare class GooglePlayAchievementMapping { 
	Name: string;
	AchievementID: string;
	clone() : GooglePlayAchievementMapping;
	static C(Other: UObject | any): GooglePlayAchievementMapping;
}

declare class GooglePlayLeaderboardMapping { 
	Name: string;
	LeaderboardID: string;
	clone() : GooglePlayLeaderboardMapping;
	static C(Other: UObject | any): GooglePlayLeaderboardMapping;
}

declare type EAndroidAudio = 'Default' | 'OGG' | 'ADPCM' | 'EAndroidAudio_MAX';
declare var EAndroidAudio : { Default:'Default',OGG:'OGG',ADPCM:'ADPCM',EAndroidAudio_MAX:'EAndroidAudio_MAX', };
declare type EAndroidGraphicsDebugger = 'None' | 'Mali' | 'Adreno' | 'EAndroidGraphicsDebugger_MAX';
declare var EAndroidGraphicsDebugger : { None:'None',Mali:'Mali',Adreno:'Adreno',EAndroidGraphicsDebugger_MAX:'EAndroidGraphicsDebugger_MAX', };
declare class AndroidRuntimeSettings extends UObject { 
	PackageName: string;
	StoreVersion: number;
	StoreVersionOffsetArmV7: number;
	StoreVersionOffsetArm64: number;
	StoreVersionOffsetX8664: number;
	ApplicationDisplayName: string;
	VersionDisplayName: string;
	MinSDKVersion: number;
	TargetSDKVersion: number;
	InstallLocation: EAndroidInstallLocation;
	bEnableGradle: boolean;
	bEnableLint: boolean;
	bPackageDataInsideApk: boolean;
	bCreateAllPlatformsInstall: boolean;
	bDisableVerifyOBBOnStartUp: boolean;
	bForceSmallOBBFiles: boolean;
	bAllowLargeOBBFiles: boolean;
	bAllowPatchOBBFile: boolean;
	bAllowOverflowOBBFiles: boolean;
	bUseExternalFilesDir: boolean;
	bPublicLogFiles: boolean;
	Orientation: EAndroidScreenOrientation;
	MaxAspectRatio: number;
	bUseDisplayCutout: boolean;
	bRestoreNotificationsOnReboot: boolean;
	bFullScreen: boolean;
	bEnableNewKeyboard: boolean;
	DepthBufferPreference: EAndroidDepthBufferPreference;
	bValidateTextureFormats: boolean;
	bForceCompressNativeLibs: boolean;
	bEnableAdvancedBinaryCompression: boolean;
	bEnableBundle: boolean;
	bEnableUniversalAPK: boolean;
	bBundleABISplit: boolean;
	bBundleLanguageSplit: boolean;
	bBundleDensitySplit: boolean;
	ExtraManifestNodeTags: string[];
	ExtraApplicationNodeTags: string[];
	ExtraApplicationSettings: string;
	ExtraActivityNodeTags: string[];
	ExtraActivitySettings: string;
	ExtraPermissions: string[];
	bAndroidVoiceEnabled: boolean;
	PackageForOculusMobile: EOculusMobileDevice[];
	bRemoveOSIG: boolean;
	KeyStore: string;
	KeyAlias: string;
	KeyStorePassword: string;
	KeyPassword: string;
	bBuildForArm64: boolean;
	bBuildForX8664: boolean;
	bBuildForES31: boolean;
	bSupportsVulkan: boolean;
	bSupportsVulkanSM5: boolean;
	DebugVulkanLayerDirectory: DirectoryPath;
	DebugVulkanDeviceLayers: string[];
	DebugVulkanInstanceLayers: string[];
	bAndroidOpenGLSupportsBackbufferSampling: boolean;
	bDetectVulkanByDefault: boolean;
	bBuildWithHiddenSymbolVisibility: boolean;
	bSaveSymbols: boolean;
	bForceLDLinker: boolean;
	bEnableGooglePlaySupport: boolean;
	bUseGetAccounts: boolean;
	GamesAppID: string;
	AchievementMap: GooglePlayAchievementMapping[];
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	bEnableSnapshots: boolean;
	bSupportAdMob: boolean;
	AdMobAdUnitID: string;
	AdMobAdUnitIDs: string[];
	GooglePlayLicenseKey: string;
	GCMClientSenderID: string;
	bShowLaunchImage: boolean;
	bAllowIMU: boolean;
	bAllowControllers: boolean;
	bBlockAndroidKeysOnControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	AndroidAudio: EAndroidAudio;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	AndroidGraphicsDebugger: EAndroidGraphicsDebugger;
	MaliGraphicsDebuggerPath: DirectoryPath;
	bEnableMaliPerfCounters: boolean;
	bMultiTargetFormat_ETC2: boolean;
	bMultiTargetFormat_DXT: boolean;
	bMultiTargetFormat_ASTC: boolean;
	TextureFormatPriority_ETC2: number;
	TextureFormatPriority_DXT: number;
	TextureFormatPriority_ASTC: number;
	SDKAPILevelOverride: string;
	NDKAPILevelOverride: string;
	BuildToolsOverride: string;
	bStreamLandscapeMeshLODs: boolean;
	bEnableDomStorage: boolean;
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject | any): AndroidRuntimeSettings;
}

declare type EIOSCloudKitSyncStrategy = 'None' | 'OnlyAtGameStart' | 'Always' | 'EIOSCloudKitSyncStrategy_MAX';
declare var EIOSCloudKitSyncStrategy : { None:'None',OnlyAtGameStart:'OnlyAtGameStart',Always:'Always',EIOSCloudKitSyncStrategy_MAX:'EIOSCloudKitSyncStrategy_MAX', };
declare class IOSBuildResourceDirectory { 
	Path: string;
	clone() : IOSBuildResourceDirectory;
	static C(Other: UObject | any): IOSBuildResourceDirectory;
}

declare class IOSBuildResourceFilePath { 
	FilePath: string;
	clone() : IOSBuildResourceFilePath;
	static C(Other: UObject | any): IOSBuildResourceFilePath;
}

declare type EIOSLandscapeOrientation = 'LandscapeLeft' | 'LandscapeRight' | 'EIOSLandscapeOrientation_MAX';
declare var EIOSLandscapeOrientation : { LandscapeLeft:'LandscapeLeft',LandscapeRight:'LandscapeRight',EIOSLandscapeOrientation_MAX:'EIOSLandscapeOrientation_MAX', };
declare type EPowerUsageFrameRateLock = 'PUFRL_None' | 'PUFRL_20' | 'PUFRL_30' | 'PUFRL_60' | 'PUFRL_MAX';
declare var EPowerUsageFrameRateLock : { PUFRL_None:'PUFRL_None',PUFRL_20:'PUFRL_20',PUFRL_30:'PUFRL_30',PUFRL_60:'PUFRL_60',PUFRL_MAX:'PUFRL_MAX', };
declare type EIOSVersion = 'IOS_14' | 'IOS_15' | 'IOS_MAX';
declare var EIOSVersion : { IOS_14:'IOS_14',IOS_15:'IOS_15',IOS_MAX:'IOS_MAX', };
declare class IOSRuntimeSettings extends UObject { 
	bEnableGameCenterSupport: boolean;
	bEnableCloudKitSupport: boolean;
	IOSCloudKitSyncStrategy: EIOSCloudKitSyncStrategy;
	bEnableRemoteNotificationsSupport: boolean;
	bEnableBackgroundFetch: boolean;
	bSupportsMetal: boolean;
	bSupportsMetalMRT: boolean;
	bBuildAsFramework: boolean;
	WindowsMetalToolchainOverride: IOSBuildResourceDirectory;
	bGeneratedSYMFile: boolean;
	bGeneratedSYMBundle: boolean;
	bGenerateCrashReportSymbols: boolean;
	bGenerateXCArchive: boolean;
	bShipForBitcode: boolean;
	bEnableAdvertisingIdentifier: boolean;
	AdditionalLinkerFlags: string;
	AdditionalShippingLinkerFlags: string;
	RemoteServerName: string;
	bUseRSync: boolean;
	RSyncUsername: string;
	RemoteServerOverrideBuildPath: string;
	CwRsyncInstallPath: IOSBuildResourceDirectory;
	SSHPrivateKeyLocation: string;
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	bRunAsCurrentUser: boolean;
	bGameSupportsMultipleActiveControllers: boolean;
	bAllowRemoteRotation: boolean;
	bUseRemoteAsVirtualJoystick: boolean;
	bUseRemoteAbsoluteDpadValues: boolean;
	bAllowControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	bDisableMotionData: boolean;
	bSupportsPortraitOrientation: boolean;
	bSupportsUpsideDownOrientation: boolean;
	bSupportsLandscapeLeftOrientation: boolean;
	bSupportsLandscapeRightOrientation: boolean;
	bSupportsITunesFileSharing: boolean;
	bSupportsFilesApp: boolean;
	PreferredLandscapeOrientation: EIOSLandscapeOrientation;
	BundleDisplayName: string;
	BundleName: string;
	BundleIdentifier: string;
	VersionInfo: string;
	FrameRateLock: EPowerUsageFrameRateLock;
	bEnableDynamicMaxFPS: boolean;
	MinimumiOSVersion: EIOSVersion;
	bSupportsIPad: boolean;
	bSupportsIPhone: boolean;
	AdditionalPlistData: string;
	bCustomLaunchscreenStoryboard: boolean;
	bEnableFacebookSupport: boolean;
	FacebookAppID: string;
	MobileProvision: string;
	SigningCertificate: string;
	bAutomaticSigning: boolean;
	IOSTeamID: string;
	DevCenterUsername: string;
	DevCenterPassword: string;
	bDisableHTTPS: boolean;
	MetalLanguageVersion: number;
	UseFastIntrinsics: boolean;
	ForceFloats: boolean;
	EnableMathOptimisations: boolean;
	IndirectArgumentTier: number;
	bSupportAppleA8: boolean;
	bUseIntegratedKeyboard: boolean;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	bStreamLandscapeMeshLODs: boolean;
	static Load(ResourceName: string): IOSRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
	static GetDefaultObject(): IOSRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject | any): IOSRuntimeSettings;
}

declare class HoloLensCorePackageStringResources { 
	PackageDisplayName: string;
	PublisherDisplayName: string;
	PackageDescription: string;
	ApplicationDisplayName: string;
	ApplicationDescription: string;
	clone() : HoloLensCorePackageStringResources;
	static C(Other: UObject | any): HoloLensCorePackageStringResources;
}

declare class HoloLensCorePackageImageResources { 
	clone() : HoloLensCorePackageImageResources;
	static C(Other: UObject | any): HoloLensCorePackageImageResources;
}

declare class HoloLensCorePackageLocalizedResources { 
	CultureId: string;
	Strings: HoloLensCorePackageStringResources;
	Images: HoloLensCorePackageImageResources;
	clone() : HoloLensCorePackageLocalizedResources;
	static C(Other: UObject | any): HoloLensCorePackageLocalizedResources;
}

declare class HoloLensTargetSettings extends UObject { 
	bBuildForEmulation: boolean;
	bBuildForDevice: boolean;
	bUseNameForLogo: boolean;
	bBuildForRetailWindowsStore: boolean;
	bAutoIncrementVersion: boolean;
	bShouldCreateAppInstaller: boolean;
	AppInstallerInstallationURL: string;
	HoursBetweenUpdateChecks: number;
	bEnablePIXProfiling: boolean;
	TileBackgroundColor: Color;
	SplashScreenBackgroundColor: Color;
	PerCultureResources: HoloLensCorePackageLocalizedResources[];
	TargetDeviceFamily: string;
	MinimumPlatformVersion: string;
	MaximumPlatformVersionTested: string;
	MaxTrianglesPerCubicMeter: number;
	SpatialMeshingVolumeSize: number;
	CompilerVersion: ECompilerVersion;
	Windows10SDKVersion: string;
	CapabilityList: string[];
	DeviceCapabilityList: string[];
	UapCapabilityList: string[];
	Uap2CapabilityList: string[];
	bSetDefaultCapabilities: boolean;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	SoundCueCookQualityIndex: number;
	static Load(ResourceName: string): HoloLensTargetSettings;
	static Find(Outer: UObject, ResourceName: string): HoloLensTargetSettings;
	static GetDefaultObject(): HoloLensTargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoloLensTargetSettings;
	static C(Other: UObject | any): HoloLensTargetSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static GetDefaultObject(): AndroidSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject | any): AndroidSDKSettings;
}

declare class LogVisualizerSessionSettings extends UObject { 
	bEnableGraphsVisualization: boolean;
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSessionSettings;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject | any): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	CategoryName: string;
	LogVerbosity: number;
	Enabled: boolean;
	clone() : CategoryFilter;
	static C(Other: UObject | any): CategoryFilter;
}

declare class VisualLoggerFiltersData { 
	SearchBoxFilter: string;
	ObjectNameFilter: string;
	Categories: CategoryFilter[];
	SelectedClasses: string[];
	clone() : VisualLoggerFiltersData;
	static C(Other: UObject | any): VisualLoggerFiltersData;
}

declare class LogVisualizerSettings extends UObject { 
	bIgnoreTrivialLogs: boolean;
	TrivialLogsThreshold: number;
	bStickToRecentData: boolean;
	bResetDataWithNewSession: boolean;
	bShowHistogramLabelsOutside: boolean;
	DefaultCameraDistance: number;
	bSearchInsideLogs: boolean;
	bUseFilterVolumes: boolean;
	GraphsBackgroundColor: Color;
	bPersistentFilters: boolean;
	bDrawExtremesOnGraphs: boolean;
	bConstrainGraphToLocalMinMax: boolean;
	bUsePlayersOnlyForPause: boolean;
	bLogNavOctreeOnStop: boolean;
	bForceUniqueLogNames: boolean;
	PersistentFilters: VisualLoggerFiltersData;
	DebugMeshMaterialFakeLight: Material;
	DebugMeshMaterialFakeLightName: string;
	static Load(ResourceName: string): LogVisualizerSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSettings;
	static GetDefaultObject(): LogVisualizerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject | any): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	PickedActor: Actor;
	static GetDefaultObject(): VisualLoggerCameraController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject | any): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	static GetDefaultObject(): VisualLoggerHUD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject | any): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActorBase extends Actor { 
	static GetDefaultObject(): VisualLoggerRenderingActorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActorBase;
	static C(Other: UObject | any): VisualLoggerRenderingActorBase;
}

declare class VisualLoggerRenderingActor extends VisualLoggerRenderingActorBase { 
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject | any): VisualLoggerRenderingActor;
}

declare class VisualLoggerRenderingComponent extends DebugDrawComponent { 
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerRenderingComponent;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject | any): VisualLoggerRenderingComponent;
}

declare class ClothPainterSettings extends MeshPaintSettings { 
	ViewMin: number;
	ViewMax: number;
	bAutoViewRange: boolean;
	AutoCalculatedViewMin: number;
	AutoCalculatedViewMax: number;
	ClothingAssets: ClothingAssetCommon[];
	bFlipNormal: boolean;
	bCullBackface: boolean;
	Opacity: number;
	static Load(ResourceName: string): ClothPainterSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPainterSettings;
	static GetDefaultObject(): ClothPainterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPainterSettings;
	static C(Other: UObject | any): ClothPainterSettings;
}

declare class ClothPaintTool_BrushSettings extends UObject { 
	PaintValue: number;
	static Load(ResourceName: string): ClothPaintTool_BrushSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_BrushSettings;
	static GetDefaultObject(): ClothPaintTool_BrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_BrushSettings;
	static C(Other: UObject | any): ClothPaintTool_BrushSettings;
}

declare class ClothPaintTool_GradientSettings extends UObject { 
	GradientStartValue: number;
	GradientEndValue: number;
	bUseRegularBrush: boolean;
	static Load(ResourceName: string): ClothPaintTool_GradientSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_GradientSettings;
	static GetDefaultObject(): ClothPaintTool_GradientSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_GradientSettings;
	static C(Other: UObject | any): ClothPaintTool_GradientSettings;
}

declare class ClothPaintTool_SmoothSettings extends UObject { 
	Strength: number;
	static Load(ResourceName: string): ClothPaintTool_SmoothSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_SmoothSettings;
	static GetDefaultObject(): ClothPaintTool_SmoothSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_SmoothSettings;
	static C(Other: UObject | any): ClothPaintTool_SmoothSettings;
}

declare class ClothPaintTool_FillSettings extends UObject { 
	Threshold: number;
	FillValue: number;
	static Load(ResourceName: string): ClothPaintTool_FillSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_FillSettings;
	static GetDefaultObject(): ClothPaintTool_FillSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_FillSettings;
	static C(Other: UObject | any): ClothPaintTool_FillSettings;
}

declare class ActorFactoryLandscape extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryLandscape;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryLandscape;
	static GetDefaultObject(): ActorFactoryLandscape;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryLandscape;
	static C(Other: UObject | any): ActorFactoryLandscape;
}

declare type ELandscapeToolFlattenMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'Interval' | 'Terrace' | 'ELandscapeToolFlattenMode_MAX';
declare var ELandscapeToolFlattenMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',Interval:'Interval',Terrace:'Terrace',ELandscapeToolFlattenMode_MAX:'ELandscapeToolFlattenMode_MAX', };
declare type ELandscapeToolErosionMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolErosionMode_MAX';
declare var ELandscapeToolErosionMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolErosionMode_MAX:'ELandscapeToolErosionMode_MAX', };
declare type ELandscapeToolHydroErosionMode = 'Invalid' | 'Both' | 'Positive' | 'ELandscapeToolHydroErosionMode_MAX';
declare var ELandscapeToolHydroErosionMode : { Invalid:'Invalid',Both:'Both',Positive:'Positive',ELandscapeToolHydroErosionMode_MAX:'ELandscapeToolHydroErosionMode_MAX', };
declare type ELandscapeToolNoiseMode = 'Invalid' | 'Both' | 'Add' | 'Sub' | 'ELandscapeToolNoiseMode_MAX';
declare var ELandscapeToolNoiseMode : { Invalid:'Invalid',Both:'Both',Add:'Add',Sub:'Sub',ELandscapeToolNoiseMode_MAX:'ELandscapeToolNoiseMode_MAX', };
declare type ELandscapeToolPasteMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolPasteMode_MAX';
declare var ELandscapeToolPasteMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolPasteMode_MAX:'ELandscapeToolPasteMode_MAX', };
declare class GizmoImportLayer { 
	LayerFilename: string;
	LayerName: string;
	bNoImport: boolean;
	clone() : GizmoImportLayer;
	static C(Other: UObject | any): GizmoImportLayer;
}

declare type ELandscapeMirrorOperation = 'MinusXToPlusX' | 'PlusXToMinusX' | 'MinusYToPlusY' | 'PlusYToMinusY' | 'RotateMinusXToPlusX' | 'RotatePlusXToMinusX' | 'RotateMinusYToPlusY' | 'RotatePlusYToMinusY' | 'ELandscapeMirrorOperation_MAX';
declare var ELandscapeMirrorOperation : { MinusXToPlusX:'MinusXToPlusX',PlusXToMinusX:'PlusXToMinusX',MinusYToPlusY:'MinusYToPlusY',PlusYToMinusY:'PlusYToMinusY',RotateMinusXToPlusX:'RotateMinusXToPlusX',RotatePlusXToMinusX:'RotatePlusXToMinusX',RotateMinusYToPlusY:'RotateMinusYToPlusY',RotatePlusYToMinusY:'RotatePlusYToMinusY',ELandscapeMirrorOperation_MAX:'ELandscapeMirrorOperation_MAX', };
declare type ELandscapeConvertMode = 'Invalid' | 'Expand' | 'Clip' | 'Resample' | 'ELandscapeConvertMode_MAX';
declare var ELandscapeConvertMode : { Invalid:'Invalid',Expand:'Expand',Clip:'Clip',Resample:'Resample',ELandscapeConvertMode_MAX:'ELandscapeConvertMode_MAX', };
declare type ELandscapeImportResult = 'Success' | 'Warning' | 'Error' | 'ELandscapeImportResult_MAX';
declare var ELandscapeImportResult : { Success:'Success',Warning:'Warning',Error:'Error',ELandscapeImportResult_MAX:'ELandscapeImportResult_MAX', };
declare type ELandscapeImportTransformType = 'None' | 'ExpandOffset' | 'ExpandCentered' | 'Resample' | 'ELandscapeImportTransformType_MAX';
declare var ELandscapeImportTransformType : { None:'None',ExpandOffset:'ExpandOffset',ExpandCentered:'ExpandCentered',Resample:'Resample',ELandscapeImportTransformType_MAX:'ELandscapeImportTransformType_MAX', };
declare class LandscapeImportResolution { 
	Width: any;
	Height: any;
	clone() : LandscapeImportResolution;
	static C(Other: UObject | any): LandscapeImportResolution;
}

declare class LandscapeFileResolution { 
	Width: any;
	Height: any;
	clone() : LandscapeFileResolution;
	static C(Other: UObject | any): LandscapeFileResolution;
}

declare class LandscapeImportFileDescriptor { 
	Coord: IntPoint;
	FilePath: string;
	clone() : LandscapeImportFileDescriptor;
	static C(Other: UObject | any): LandscapeImportFileDescriptor;
}

declare class LandscapeImportDescriptor { 
	ImportResolutions: LandscapeImportResolution[];
	FileResolutions: LandscapeFileResolution[];
	FileDescriptors: LandscapeImportFileDescriptor[];
	Scale: Vector;
	clone() : LandscapeImportDescriptor;
	static C(Other: UObject | any): LandscapeImportDescriptor;
}

declare type ELandscapeImportAlphamapType = 'Additive' | 'Layered' | 'ELandscapeImportAlphamapType_MAX';
declare var ELandscapeImportAlphamapType : { Additive:'Additive',Layered:'Layered',ELandscapeImportAlphamapType_MAX:'ELandscapeImportAlphamapType_MAX', };
declare class LandscapeImportLayerInfo { 
	LayerName: string;
	LayerInfo: LandscapeLayerInfoObject;
	SourceFilePath: string;
	clone() : LandscapeImportLayerInfo;
	static C(Other: UObject | any): LandscapeImportLayerInfo;
}

declare class LandscapeImportLayer extends LandscapeImportLayerInfo { 
	ThumbnailMIC: LandscapeMaterialInstanceConstant;
	ImportResult: ELandscapeImportResult;
	ErrorMessage: string;
	ExportFilePath: string;
	bSelected: boolean;
	clone() : LandscapeImportLayer;
	static C(Other: UObject | any): LandscapeImportLayer;
}

declare class LandscapePatternBrushWorldSpaceSettings { 
	Origin: Vector2D;
	Rotation: number;
	bCenterTextureOnOrigin: boolean;
	RepeatSize: number;
	clone() : LandscapePatternBrushWorldSpaceSettings;
	static C(Other: UObject | any): LandscapePatternBrushWorldSpaceSettings;
}

declare type EColorChannel = 'Red' | 'Green' | 'Blue' | 'Alpha' | 'EColorChannel_MAX';
declare var EColorChannel : { Red:'Red',Green:'Green',Blue:'Blue',Alpha:'Alpha',EColorChannel_MAX:'EColorChannel_MAX', };
declare class LandscapeEditorObject extends UObject { 
	ToolStrength: number;
	bUseWeightTargetValue: boolean;
	WeightTargetValue: number;
	MaximumValueRadius: number;
	bCombinedLayersOperation: boolean;
	FlattenMode: ELandscapeToolFlattenMode;
	bUseSlopeFlatten: boolean;
	bPickValuePerApply: boolean;
	bUseFlattenTarget: boolean;
	FlattenTarget: number;
	bShowFlattenTargetPreview: boolean;
	TerraceInterval: number;
	TerraceSmooth: number;
	bFlattenEyeDropperModeActivated: boolean;
	FlattenEyeDropperModeDesiredTarget: number;
	RampWidth: number;
	RampSideFalloff: number;
	SmoothFilterKernelSize: number;
	bDetailSmooth: boolean;
	DetailScale: number;
	ErodeThresh: number;
	ErodeSurfaceThickness: number;
	ErodeIterationNum: number;
	ErosionNoiseMode: ELandscapeToolErosionMode;
	ErosionNoiseScale: number;
	RainAmount: number;
	SedimentCapacity: number;
	HErodeIterationNum: number;
	RainDistMode: ELandscapeToolHydroErosionMode;
	RainDistScale: number;
	bHErosionDetailSmooth: boolean;
	HErosionDetailScale: number;
	NoiseMode: ELandscapeToolNoiseMode;
	NoiseScale: number;
	bUseSelectedRegion: boolean;
	bUseNegativeMask: boolean;
	PasteMode: ELandscapeToolPasteMode;
	bApplyToAllTargets: boolean;
	bSnapGizmo: boolean;
	bSmoothGizmoBrush: boolean;
	GizmoHeightmapFilenameString: string;
	GizmoImportSize: IntPoint;
	GizmoImportLayers: GizmoImportLayer[];
	MirrorPoint: Vector2D;
	MirrorOp: ELandscapeMirrorOperation;
	MirrorSmoothingWidth: number;
	BlueprintBrush: UnrealEngineClass;
	ResizeLandscape_QuadsPerSection: number;
	ResizeLandscape_SectionsPerComponent: number;
	ResizeLandscape_ComponentCount: IntPoint;
	ResizeLandscape_ConvertMode: ELandscapeConvertMode;
	NewLandscape_Material: any;
	NewLandscape_QuadsPerSection: number;
	NewLandscape_SectionsPerComponent: number;
	NewLandscape_ComponentCount: IntPoint;
	NewLandscape_Location: Vector;
	NewLandscape_Rotation: Rotator;
	NewLandscape_Scale: Vector;
	ImportLandscape_HeightmapImportResult: ELandscapeImportResult;
	ImportLandscape_HeightmapErrorMessage: string;
	ImportLandscape_HeightmapFilename: string;
	ImportLandscape_Width: any;
	ImportLandscape_Height: any;
	HeightmapExportFilename: string;
	ImportLandscape_GizmoLocalPosition: IntPoint;
	ImportType: ELandscapeImportTransformType;
	bHeightmapSelected: boolean;
	bExportEditLayer: boolean;
	HeightmapImportDescriptor: LandscapeImportDescriptor;
	HeightmapImportDescriptorIndex: number;
	ImportLandscape_Data: any[];
	bCanHaveLayersContent: boolean;
	bFlipYAxis: boolean;
	WorldPartitionGridSize: any;
	ImportLandscape_AlphamapType: ELandscapeImportAlphamapType;
	ImportLandscape_Layers: LandscapeImportLayer[];
	BrushRadius: number;
	BrushFalloff: number;
	bUseClayBrush: boolean;
	AlphaBrushScale: number;
	bAlphaBrushAutoRotate: boolean;
	AlphaBrushRotation: number;
	AlphaBrushPanU: number;
	AlphaBrushPanV: number;
	bUseWorldSpacePatternBrush: boolean;
	WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings;
	AlphaTexture: Texture2D;
	AlphaTextureChannel: EColorChannel;
	AlphaTextureSizeX: number;
	AlphaTextureSizeY: number;
	AlphaTextureData: number[];
	BrushComponentSize: number;
	PaintingRestriction: ELandscapeLayerPaintingRestriction;
	TargetDisplayOrder: ELandscapeLayerDisplayMode;
	ShowUnusedLayers: boolean;
	CurrentLayerIndex: number;
	static Load(ResourceName: string): LandscapeEditorObject;
	static Find(Outer: UObject, ResourceName: string): LandscapeEditorObject;
	static GetDefaultObject(): LandscapeEditorObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeEditorObject;
	static C(Other: UObject | any): LandscapeEditorObject;
}

declare class LandscapePlaceholder extends Actor { 
	static GetDefaultObject(): LandscapePlaceholder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapePlaceholder;
	static C(Other: UObject | any): LandscapePlaceholder;
}

declare class PLACEHOLDER-CLASS__UI_MovieRenderPipelineInfoTableRow_C_0 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PLACEHOLDER-CLASS__UI_MovieRenderPipelineInfoTableRow_C_0;
	static Find(Outer: UObject, ResourceName: string): PLACEHOLDER-CLASS__UI_MovieRenderPipelineInfoTableRow_C_0;
	static StaticClass: any;
	static GetClassObject(): Class;
	static GetDefaultObject(): PLACEHOLDER-CLASS__UI_MovieRenderPipelineInfoTableRow_C_0;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PLACEHOLDER-CLASS__UI_MovieRenderPipelineInfoTableRow_C_0;
	static C(Other: UObject | any): PLACEHOLDER-CLASS__UI_MovieRenderPipelineInfoTableRow_C_0;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

