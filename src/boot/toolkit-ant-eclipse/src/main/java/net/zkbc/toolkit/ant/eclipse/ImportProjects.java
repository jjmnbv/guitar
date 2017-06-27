package net.zkbc.toolkit.ant.eclipse;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import org.apache.tools.ant.BuildException;
import org.apache.tools.ant.Task;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IProjectDescription;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IWorkspace;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.IWorkspaceRunnable;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.Path;

public class ImportProjects extends Task {

	private String locations;
	private String excludes = "remotesystemstempfiles,scripts,servers";

	public String getLocations() {
		return locations;
	}

	public void setLocations(String locations) {
		this.locations = locations;
	}

	public String getExcludes() {
		return excludes;
	}

	public void setExcludes(String excludes) {
		this.excludes = excludes;
	}

	public void execute() throws BuildException {
		try {
			final List<String> dirLocations = Arrays
					.asList(locations.replaceAll("\\\\/", "/").replaceAll("\\\\", "/").split(","));
			final List<String> dirExcludes = Arrays.asList(excludes.split(","));
			final IWorkspace workspace = ResourcesPlugin.getWorkspace();
			final IWorkspaceRoot root = workspace.getRoot();

			workspace.run(new IWorkspaceRunnable() {
				@Override
				public void run(IProgressMonitor monitor) throws CoreException {

					for (String location : dirLocations) {
						for (File dir : new File(location).listFiles()) {
							if (dir.isFile() || dir.isHidden()) {
								continue;
							}
							if (dir.getName().charAt(0) == '.') {
								continue;
							}
							if (dirExcludes.contains(dir.getName().toLowerCase())) {
								continue;
							}

							IProjectDescription description = workspace
									.loadProjectDescription(new Path(new File(dir, ".project").getAbsolutePath()));
							IProject project = root.getProject(description.getName());
							project.create(description, monitor);
							project.open(IResource.NONE, monitor);
						}
					}

				}
			}, workspace.getRuleFactory().modifyRule(root), IResource.NONE, null);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
