using UnrealBuildTool;

public class BigFootsProjectTarget : TargetRules
{
	public BigFootsProjectTarget(TargetInfo Target) : base(Target)
	{
		DefaultBuildSettings = BuildSettingsVersion.V2;
		Type = TargetType.Game;
		ExtraModuleNames.Add("BigFootsProject");
	}
}
